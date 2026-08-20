/* ============ Espace gérant (démo sans serveur) ============ */
const PASS = "LUIGI2024";
const ORDER_STEPS = ["Nouvelle", "En préparation", "En livraison", "Livrée"];

function adminGet(key, def) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : def;
  } catch (e) {
    return def;
  }
}
function adminSet(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}

const gate = document.getElementById("adminGate");
const panel = document.getElementById("adminPanel");
const adminLogin = document.getElementById("adminLogin");
const adminPass = document.getElementById("adminPass");

if (adminLogin && adminPass && gate && panel) {
  adminLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    if (adminPass.value.toUpperCase() === PASS) {
      gate.hidden = true;
      panel.hidden = false;
      renderOrders();
      renderPromos();
      renderKpis();
    } else {
      adminPass.value = "";
      adminPass.placeholder = "Code incorrect — démo : LUIGI2024";
    }
  });
}

/* ---------- Commandes ---------- */
function seedOrders() {
  const orders = adminGet("luigi_orders", null);
  if (orders) return orders;
  const seed = [
    { id: 1001, name: "Karim B.", total: 320, type: "Livraison", status: 0, at: "12:05" },
    { id: 1002, name: "Salma T.", total: 185, type: "À emporter", status: 1, at: "12:18" },
    { id: 1003, name: "Yassine M.", total: 240, type: "Sur place", status: 2, at: "12:31" },
  ];
  adminSet("luigi_orders", seed);
  return seed;
}
let ORDERS = seedOrders();

const ordersList = document.getElementById("ordersList");
const orderAdd = document.getElementById("orderAdd");

function renderOrders() {
  if (!ordersList) return;
  ordersList.innerHTML = "";
  ORDERS.forEach((o) => {
    const row = document.createElement("div");
    row.className = "order-row";
    const pill = ORDER_STEPS[o.status] || "Livrée";
    const done = o.status >= ORDER_STEPS.length - 1;
    row.innerHTML =
      '<div class="order-info"><strong>' + o.name +
      '</strong><span>#' + o.id + " · " + o.type + " · " + o.at + " · " + o.total + " DH</span></div>" +
      '<button class="status-pill s' + o.status + '" data-id="' + o.id + '">' + pill + " →</button>";
    if (done) row.querySelector(".status-pill").disabled = true;
    ordersList.appendChild(row);
  });
  const rows = ordersList.querySelectorAll(".status-pill");
  rows.forEach((b) =>
    b.addEventListener("click", () => {
      const o = ORDERS.find((x) => x.id === Number(b.dataset.id));
      if (!o || o.status >= ORDER_STEPS.length - 1) return;
      o.status += 1;
      adminSet("luigi_orders", ORDERS);
      renderOrders();
      renderKpis();
    })
  );
}

if (orderAdd) {
  orderAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("oName").value.trim();
    const total = Number(document.getElementById("oTotal").value);
    const type = document.getElementById("oType").value;
    if (!name || !total) return;
    const now = new Date();
    ORDERS.unshift({
      id: 1000 + Math.floor(Math.random() * 9000),
      name: name,
      total: total,
      type: type,
      status: 0,
      at: now.getHours() + ":" + String(now.getMinutes()).padStart(2, "0"),
    });
    adminSet("luigi_orders", ORDERS);
    document.getElementById("oName").value = "";
    document.getElementById("oTotal").value = "";
    renderOrders();
    renderKpis();
  });
}

/* ---------- Codes promo ---------- */
const DEF_PROMOS = {
  LUIGI10: { pct: 10, on: true },
  PASTA15: { pct: 15, on: true },
  FAMILLE20: { pct: 20, on: false },
};
let PROMOS = adminGet("luigi_promos", DEF_PROMOS);

const promosList = document.getElementById("promosList");
const promoAdd = document.getElementById("promoAdd");

function renderPromos() {
  if (!promosList) return;
  promosList.innerHTML = "";
  Object.keys(PROMOS).forEach((code) => {
    const row = document.createElement("div");
    row.className = "promo-row2";
    row.innerHTML =
      '<span class="promo-code"><b>' + code + '</b> -' + PROMOS[code].pct + "%</span>" +
      '<button class="promo-toggle ' + (PROMOS[code].on ? "on" : "off") + '" data-code="' + code + '">' +
      (PROMOS[code].on ? "Actif" : "Inactif") + "</button>" +
      '<button class="promo-del" data-del="' + code + '">&times;</button>';
    promosList.appendChild(row);
  });
  promosList.querySelectorAll(".promo-toggle").forEach((b) =>
    b.addEventListener("click", () => {
      PROMOS[b.dataset.code].on = !PROMOS[b.dataset.code].on;
      adminSet("luigi_promos", PROMOS);
      renderPromos();
      renderKpis();
    })
  );
  promosList.querySelectorAll(".promo-del").forEach((b) =>
    b.addEventListener("click", () => {
      delete PROMOS[b.dataset.del];
      adminSet("luigi_promos", PROMOS);
      renderPromos();
      renderKpis();
    })
  );
}

if (promoAdd) {
  promoAdd.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = document.getElementById("pCode").value.trim().toUpperCase();
    const pct = Number(document.getElementById("pPct").value);
    if (!code || !pct || pct <= 0 || pct > 90) return;
    PROMOS[code] = { pct: pct, on: true };
    adminSet("luigi_promos", PROMOS);
    document.getElementById("pCode").value = "";
    document.getElementById("pPct").value = "";
    renderPromos();
    renderKpis();
  });
}

/* ---------- KPIs ---------- */
function renderKpis() {
  if (!panel || panel.hidden) return;
  const active = ORDERS.filter((o) => o.status < ORDER_STEPS.length - 1);
  const ca = active.reduce((a, o) => a + o.total, 0);
  const kpiOrders = document.getElementById("kpiOrders");
  const kpiCa = document.getElementById("kpiCa");
  const kpiPromos = document.getElementById("kpiPromos");
  if (kpiOrders) kpiOrders.textContent = active.length;
  if (kpiCa) kpiCa.textContent = ca + " DH";
  if (kpiPromos) kpiPromos.textContent = Object.keys(PROMOS).filter((c) => PROMOS[c].on).length;
}