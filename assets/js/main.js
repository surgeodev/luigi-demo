/* ============ Navigation ============ */
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
    });
  });
}

/* ---------- Scroll-spy (one page) ---------- */
(function () {
  const links = document.querySelectorAll(".nav-link[href^='#']");
  if (!links.length) return;
  const sections = [...document.querySelectorAll("section[id]")];
  const spy = () => {
    const y = window.scrollY + 140;
    let cur = null;
    for (const s of sections) if (s.offsetTop <= y) cur = s.id;
    links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + cur));
  };
  window.addEventListener("scroll", spy, { passive: true });
  spy();
})();

/* ============ Panier (page menu) ============ */
const grid = document.getElementById("menuGrid");
const cartFab = document.getElementById("cartFab");
const cartBadge = document.getElementById("cartBadge");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartOrder = document.getElementById("cartOrder");
const tabs = document.getElementById("tabs");

const ALL = {};
let CART = {};
let currentCat = "entrees";

if (grid && tabs) {
  for (const cat in MENU) {
    for (const it of MENU[cat]) ALL[cat + "|" + it.name] = it;
  }

  function renderCat(cat) {
    currentCat = cat;
    grid.innerHTML = "";
    (MENU[cat] || []).forEach((item, i) => {
      const key = cat + "|" + item.name;
      const card = document.createElement("div");
      card.className = "menu-card";
      card.style.animationDelay = i * 40 + "ms";
      const price = item.price
        ? `<span class="menu-card-price">${item.price} DH</span>`
        : `<span class="menu-card-price">Sur place</span>`;
      const badge = item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : "";
      const desc = item.desc ? `<p class="menu-card-desc">${item.desc}</p>` : "";
      const qty = CART[key] || 0;
      const ctrl =
        qty > 0
          ? `<div class="menu-card-add qty-stepper">
               <button data-action="dec" data-key="${key}" aria-label="Moins">&minus;</button>
               <span class="qty-value">${qty}</span>
               <button data-action="inc" data-key="${key}" aria-label="Plus">+</button>
             </div>`
          : `<div class="menu-card-add"><button class="btn-add" data-action="add" data-key="${key}">Ajouter</button></div>`;
      card.innerHTML = `
        <div class="menu-card-img"><img src="assets/img/${item.img}" alt="${item.name}" loading="lazy"></div>
        <div class="menu-card-body">
          <div class="menu-card-title"><h3>${item.name}</h3></div>
          ${desc}${badge}
          <div class="menu-card-bottom"><span class="menu-card-price">${price}</span>${ctrl}</div>
        </div>`;
      const cardImg = card.querySelector(".menu-card-img img");
      if (cardImg) {
        if (cardImg.complete && cardImg.naturalWidth) cardImg.classList.add("shown");
        else cardImg.addEventListener("load", () => cardImg.classList.add("shown"), { once: true });
      }
      grid.appendChild(card);
    });
  }

  tabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");
    renderCat(btn.dataset.cat);
  });

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const { action, key } = btn.dataset;
    if (action === "add") CART[key] = 1;
    else if (action === "inc") CART[key] = (CART[key] || 0) + 1;
    else if (action === "dec") {
      CART[key] = (CART[key] || 0) - 1;
      if (CART[key] <= 0) delete CART[key];
    }
    syncUI();
    renderCat(currentCat);
  });

  renderCat("entrees");

  function cartCount() {
    return Object.values(CART).reduce((a, b) => a + b, 0);
  }
  function cartTotalPrice() {
    let t = 0;
    for (const key in CART) if (ALL[key]) t += ALL[key].price * CART[key];
    return t;
  }

  function syncUI() {
    const count = cartCount();
    cartBadge.textContent = count;
    cartBadge.classList.remove("pop");
    void cartBadge.offsetWidth;
    cartBadge.classList.add("pop");
  }

  function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
  }
  function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
  }

  if (cartFab) cartFab.addEventListener("click", openCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);
  const cartClose = document.getElementById("cartClose");
  if (cartClose) cartClose.addEventListener("click", closeCart);

  /* ---------- Checkout ---------- */
  document.querySelectorAll(".co-type-btn").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".co-type-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      const addrWrap = document.getElementById("coAddrWrap");
      if (addrWrap) addrWrap.style.display = b.dataset.type === "livraison" ? "" : "none";
    })
  );
  document.querySelectorAll(".pay-choice").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".pay-choice").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
    })
  );

  if (cartOrder) {
    const orderLabel = document.getElementById("orderLabel");
    let orderArmed = false,
      orderTimer = null;

    function orderReset(sent) {
      orderArmed = false;
      orderLabel.textContent = "Envoyer la commande";
      cartOrder.classList.remove("armed");
      if (sent) {
        cartOrder.classList.add("sent");
        setTimeout(() => cartOrder.classList.remove("sent"), 2400);
      }
    }
    cartOrder.addEventListener("click", () => {
      if (!cartCount()) return;
      const name = document.getElementById("coName").value.trim();
      const phone = document.getElementById("coPhone").value.trim();
      if (!name || !phone) {
        orderLabel.textContent = "Nom et téléphone requis";
        setTimeout(orderReset, 3200);
        return;
      }
      if (!orderArmed) {
        orderArmed = true;
        orderLabel.textContent = "Confirmer l'envoi ?";
        cartOrder.classList.add("armed");
        clearTimeout(orderTimer);
        orderTimer = setTimeout(orderReset, 8000);
        return;
      }
      clearTimeout(orderTimer);
      const type = document.querySelector(".co-type-btn.active").dataset.type;
      const addr = document.getElementById("coAddr").value.trim();
      const pay = document.querySelector(".pay-choice.active").dataset.pay;
      const lines = Object.entries(CART)
        .map(([key, q]) => {
          const it = ALL[key];
          return `  • ${q} × ${it.name} — ${it.price * q} DH`;
        })
        .join("\n");
      const msg =
        "🍽️ NOUVELLE COMMANDE — Luigi Sidi Maarouf\n" +
        "Mode : " + type.toUpperCase() +
        "\n" + lines +
        `\n\nTotal : ${cartTotalPrice()} DH` +
        "\nPaiement : " + pay +
        "\nNom : " + name +
        "\nTéléphone : " + phone +
        (type === "livraison" && addr ? "\nAdresse : " + addr : "") +
        "\n— Confirmation au plus vite, merci !";
      window.open("https://wa.me/212661489955?text=" + encodeURIComponent(msg), "_blank");
      orderLabel.textContent = "Envoyé ✓";
      orderReset(true);
    });
  }

  /* ---------- Drawer → panier ---------- */
  const updateDrawer = () => {
    if (!cartItems || !cartTotal) return;
    cartItems.innerHTML = "";
    if (!cartCount()) {
      cartItems.innerHTML =
        '<div class="cart-empty">Votre panier est vide.<br>Ajoutez des plats pour commander.</div>';
      cartTotal.textContent = "0 DH";
      if (cartOrder) cartOrder.disabled = true;
      return;
    }
    Object.entries(CART).forEach(([key, q]) => {
      const it = ALL[key];
      const row = document.createElement("div");
      row.className = "cart-item-row";
      row.innerHTML = `
        <img class="cart-item-thumb" src="assets/img/${it.img}" alt="${it.name}">
        <div class="cart-item-info">
          <p class="cart-item-name">${it.name}</p>
          <p class="cart-item-price">${it.price * q} DH</p>
        </div>
        <div class="qty-stepper">
          <button data-action="dec" data-key="${key}" aria-label="Moins">&minus;</button>
          <span class="qty-value">${q}</span>
          <button data-action="inc" data-key="${key}" aria-label="Plus">+</button>
        </div>
        <button class="cart-remove" data-action="remove" data-key="${key}" aria-label="Retirer">&times;</button>`;
      cartItems.appendChild(row);
    });
    cartTotal.textContent = cartTotalPrice() + " DH";
    if (cartOrder) cartOrder.disabled = false;
  };
  cartItems && cartItems.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const { action, key } = btn.dataset;
    if (action === "dec") {
      CART[key] = (CART[key] || 0) - 1;
      if (CART[key] <= 0) delete CART[key];
    } else if (action === "remove") delete CART[key];
    syncUI();
    renderCat(currentCat);
    updateDrawer();
  });
  updateDrawer();
}

/* ============ Réservation (page réservation) ============ */
const resForm = document.getElementById("reservationForm");
if (resForm) {
  const resLabel = document.getElementById("resLabel");
  const resSubmit = document.getElementById("resSubmit");
  let resArmed = false,
    resTimer = null;
  const resReset = () => {
    resArmed = false;
    resLabel.textContent = "Réserver sur WhatsApp";
    resSubmit.classList.remove("armed");
  };
  resForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("res-date").value;
    const time = document.getElementById("res-time").value;
    const people = document.getElementById("res-people").value;
    const name = document.getElementById("res-name").value.trim();
    const phone = document.getElementById("res-phone").value.trim();
    const email = document.getElementById("res-email").value.trim();
    const msg = document.getElementById("res-msg").value.trim();
    if (!date || !time || !name || !phone) {
      resLabel.textContent = "Champs requis manquants";
      setTimeout(resReset, 3200);
      return;
    }
    if (!resArmed) {
      resArmed = true;
      resLabel.textContent = "Confirmer la réservation ?";
      resSubmit.classList.add("armed");
      clearTimeout(resTimer);
      resTimer = setTimeout(resReset, 8000);
      return;
    }
    clearTimeout(resTimer);
    const d = date.split("-");
    const pretty = d.length === 3 ? `${d[2]}/${d[1]}/${d[0]}` : date;
    const lines = [
      "Réservation Luigi Sidi Maarouf",
      "—",
      "Date : " + pretty,
      "Heure : " + time,
      "Personne(s) : " + people,
      "Nom : " + name,
      "Téléphone : " + phone,
    ];
    if (email) lines.push("Email : " + email);
    if (msg) lines.push("Message : " + msg);
    window.open(
      "https://wa.me/212661489955?text=" +
        encodeURIComponent("Bonjour Luigi Sidi Maarouf,\n" + lines.join("\n")),
      "_blank"
    );
    resLabel.textContent = "Envoyé ✓";
    setTimeout(resReset, 2600);
  });
}

/* ============ Contact (page contact) ============ */
const ctForm = document.getElementById("contactForm");
if (ctForm) {
  const ctLabel = document.getElementById("ctLabel");
  const ctSubmit = document.getElementById("ctSubmit");
  let ctArmed = false,
    ctTimer = null;
  const ctReset = () => {
    ctArmed = false;
    ctLabel.textContent = "Envoyer le message";
    ctSubmit.classList.remove("armed");
  };
  ctForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("ct-name").value.trim();
    const phone = document.getElementById("ct-phone").value.trim();
    const email = document.getElementById("ct-email").value.trim();
    const topic = document.getElementById("ct-topic").value;
    const msg = document.getElementById("ct-msg").value.trim();
    if (!name || !email || !msg) {
      ctLabel.textContent = "Champs requis manquants";
      setTimeout(ctReset, 3200);
      return;
    }
    if (!ctArmed) {
      ctArmed = true;
      ctLabel.textContent = "Confirmer l'envoi ?";
      ctSubmit.classList.add("armed");
      clearTimeout(ctTimer);
      ctTimer = setTimeout(ctReset, 8000);
      return;
    }
    clearTimeout(ctTimer);
    const lines = [
      "Message site — Luigi Sidi Maarouf",
      "Sujet : " + topic,
      "Nom : " + name + (phone ? " | Tél : " + phone : ""),
      "Email : " + email,
      "Message : " + msg,
    ];
    window.open(
      "https://wa.me/212661489955?text=" + encodeURIComponent(lines.join("\n")),
      "_blank"
    );
    ctLabel.textContent = "Envoyé ✓";
    setTimeout(ctReset, 2600);
  });
}

/* ============ Newsletter (footer, toutes pages) ============ */
const nlForm = document.getElementById("newsletterForm");
if (nlForm) {
  nlForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value.trim();
    if (!email) return;
    const btn = document.getElementById("newsletterBtn");
    const done = document.getElementById("newsletterDone");
    btn.textContent = "Envoyé ✓";
    nlForm.hidden = true;
    done.hidden = false;
    window.open(
      "mailto:contact@luigi.ma?subject=Inscription newsletter Luigi&body=" +
        encodeURIComponent(email),
      "_blank"
    );
  });
}