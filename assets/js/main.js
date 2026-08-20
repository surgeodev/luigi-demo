const MENU = {
  entrees: [
    { name: "SALADE DE SAUMON FUMÉ AU CHÈVRE", price: 100.0, img: "menu/salade-1_page-0002.webp" },
    { name: "SALADE GRECQUE", price: 90.0, img: "menu/salade-3_page-0001.webp" },
    { name: "SALADE AVOCAT-MANGUE", price: 95.0, img: "menu/IMG-22350000-editedby-YoBEN-ComsideA-9.webp" },
    { name: "INSALATA DI MARE", price: 100.0, img: "menu/IMG-22350000-editedby-YoBEN-ComsideA-5.webp" },
    { name: "SALADE QUINOA", price: 95.0, img: "menu/IMG-22350000-editedby-YoBEN-ComsideA-2.webp" },
    { name: "FRITURE DE CALAMARS", price: 125.0, img: "menu/FRITURE-DE-CALAMRS-3.webp" },
    { name: "SALADE LUIGI", price: 120.0, img: "menu/SALADE-LUIGI.webp" },
    { name: "BURRATA", price: 100.0, img: "menu/SALADE-BURRATA-4-2.webp" },
    { name: "SALADE NIÇOISE", price: 90.0, img: "menu/SALADE-NIÇOISE-3-2.webp" },
    { name: "LES HUÎTRES GRATINÉES", price: 120.0, img: "menu/LES-HUITRES-GRATINEES.webp" },
    { name: "ASSIETTE DE 6 HUÎTRES", price: 120.0, img: "menu/ASSIETTE-DE-6-HUITRES.webp" },
    { name: "GRATIN DE FRUITS DE MER", price: 110.0, img: "menu/GRATIN-DE-FRUITS-DE-MER-.webp" },
    { name: "CREVETTES PIL PIL", price: 110.0, img: "menu/CREVETTES-PIL-PIL.webp" },
    { name: "LÉGUMES GRILLÉS", price: 80.0, img: "menu/LEGUMES-GRILLES.webp" },
    { name: "ASSIETTE DE PALOURDES", price: 130.0, img: "menu/ASSIETTE-DE-PALOURDES.webp" },
    { name: "ASSIETTE DE MOULES ET FRITES", price: 120.0, img: "menu/ASSIETTE-DE-MOULES-ET-FRITES.webp" },
    { name: "SALADE AUX FRUITS FRAIS ET CREVETTES", price: 95.0, img: "menu/SALADE-AUX-FRUITS-FRAIS-ET-CREVETTES.webp" },
    { name: "ASSIETTE DE SAUMON FUMÉ", price: 100.0, img: "menu/ASSIETTE-DE-SAUMON-FUME-1.webp" },
    { name: "SALADE MAISON", price: 95.0, img: "menu/SALADE-MAISON.webp" },
    { name: "CARPACCIO DE FILET DE BŒUF", price: 90.0, img: "menu/CARPACCIO-DE-FILET-DE-BOEUF.webp" },
    { name: "CAPRESE", price: 80.0, img: "menu/CAPRESE-1.webp" },
    { name: "SALADE CÉSAR / POULET", price: 90.0, img: "menu/SALADE-CESAR.webp" },
    { name: "AVOCAT AUX CREVETTES", price: 95.0, img: "menu/AVOCAT-AUX-CREVETTES.webp" },
    { name: "POULET BALSAMICO", price: 90.0, img: "menu/POULET-BALSAMICO.webp" },
  ],
  pizzas: [
    { name: "VALENTINO", price: 130.0, img: "menu/pizza_page-0001.webp" },
    { name: "VERDURA STRACCIATELLA", price: 110.0, img: "menu/pizza-1_page-0004.webp" },
    { name: "BURRATA", price: 125.0, img: "menu/IMG-22350000-editedby-YoBEN-ComsideA-4.webp" },
    { name: "BRESAOLA", price: 120.0, img: "menu/IMG-22350000-editedby-YoBEN-ComsideA-3.webp" },
    { name: "STRACCIATELLA", price: 110.0, img: "menu/IMG-22350000-editedby-YoBEN-ComsideA-6.webp" },
    { name: "BUFALA", price: 110.0, img: "menu/PIZZA-BUFALA-2.JPG-e1661775891198.webp" },
    { name: "BEEF AND LOVE", price: 110.0, img: "menu/PIZZA-BEEF-AND-LOVE-5.JPG-2.webp" },
    { name: "AVOCADO", price: 110.0, img: "menu/PIZZA-AVOCADO-2.JPG.webp" },
    { name: "ITALIANO", price: 110.0, img: "menu/PIZZA-ITALIANO-2-2.webp" },
    { name: "COMPOSÉE", price: 120.0, img: "menu/COMPOSEE.webp" },
    { name: "LUIGI", price: 95.0, img: "menu/LUIGI.webp" },
    { name: "SALAMONE", price: 110.0, img: "menu/RIO.webp" },
    { name: "FRUTTI DI MARE", price: 110.0, img: "menu/FRUTTI-DI-MARE.webp" },
    { name: "SPINACI", price: 90.0, img: "menu/SPINACI.webp" },
    { name: "4 STAGIONI", price: 90.0, img: "menu/4-STAGIONI.webp" },
    { name: "4 FROMAGGIO", price: 90.0, img: "menu/4-FORMAGGIO.webp" },
    { name: "PIZZA FAJITAS", price: 90.0, img: "menu/PIZZA-FAJITAS.webp" },
    { name: "VIANDE HACHÉE", price: 90.0, img: "menu/VIANDE-HACHEE.webp" },
    { name: "ORTOLANA", price: 90.0, img: "menu/ORTOLANA.webp" },
    { name: "MARE E MONTI", price: 110.0, img: "menu/MARE-E-MONTI.webp" },
    { name: "DIAVOLA", price: 90.0, img: "menu/DIAVOLA.webp" },
    { name: "SICILIANA", price: 80.0, img: "menu/SICILIANA.webp" },
    { name: "TONNO", price: 90.0, img: "menu/TONNO.webp" },
    { name: "CALZONE", price: 90.0, img: "menu/CALZONE.webp" },
    { name: "CALZONE CASABLANCA", price: 100.0, img: "menu/CALZONE-CASABLANCA.webp" },
    { name: "FUNGHI", price: 90.0, img: "menu/FUNGHI.webp" },
    { name: "PROSCIUTTO", price: 90.0, img: "menu/PROSCIUTTO.webp" },
    { name: "MARGHERITA", price: 70.0, img: "menu/MARGHERITA.webp" },
    { name: "BRUSCHETTA", price: 70.0, img: "menu/BRUSCHETTE.webp" },
    { name: "FOCACCIA", price: 30.0, img: "menu/FOCACCIA.webp" },
  ],
  pates: [
    { name: "RAVIOLI À LA TRUFFE", price: 140.0, img: "menu/ravioli.webp" },
    { name: "TONY RIGATONI", price: 110.0, img: "menu/Pasta-september-2025_page-0002.webp" },
    { name: "RISOTTO CREVETTES AU SAFRAN", price: 130.0, img: "menu/IMG-22350000-editedby-YoBEN-ComsideA-8.webp" },
    { name: "RISOTTO ALLA CRÈME DE TRUFFE NOIRE", price: 145.0, img: "menu/RISOTTO-ALLA-CRÈME-DE-TRUFE-NOIRE-4-2.webp" },
    { name: "IMPERIAL AUX FRUITS DE MER", price: 200.0, img: "menu/IMPERIAL-AUX-FRUITS-DE-MER.webp" },
    { name: "SPAGHETTI ALLA PUTTANESCA", price: 90.0, img: "menu/SPAGHETTI-ALLA-PUTTANESCA.webp" },
    { name: "PENNE SCAMPI E ZUCCHINE", price: 130.0, img: "menu/PENNE-SCAMPI-E-ZUCCHINE.webp" },
    { name: "TAGLIATELLE PRIMAVERA", price: 90.0, img: "menu/TAGLIATELLE-PRIMAVERA.webp" },
    { name: "PÂTES STRAVAGANZA", price: 225.0, img: "menu/PATES-STRAVAGANZA.webp" },
    { name: "SPAGHETTI AI FRUTTI DI MARE", price: 115.0, img: "menu/SPAGHITTI-AI-FRUTTI-DI-MARE.webp" },
    { name: "SPAGHETTI SINATRA", price: 145.0, img: "menu/SPAGHETTI-SINATRA.webp" },
    { name: "RISOTTO AUX FRUITS DE MER AVEC GAMBAS", price: 150.0, img: "menu/RISOTTO-AUX-FRUITS-DE-MER-AVEC-CAMBAS.webp" },
    { name: "RISOTTO AUX FRUITS DE MER", price: 120.0, img: "menu/RISOTTO-AUX-FRUITS-DE-MER.webp" },
    { name: "PÂTES AUX CRABES ET FRUITS DE MER", price: 145.0, img: "menu/PATES-AUX-CRABES-ET-FRUITS-DE-MER.webp" },
    { name: "TRIO COMPOSÉ", price: 165.0, img: "menu/Trio-Composé.webp" },
    { name: "PÂTES NOIRES AUX FRUITS DE MER", price: 115.0, img: "menu/PATES-NOIRES-AUX-FRUITS-DE-MER.webp" },
    { name: "TAGLIATELLE AI FUNGHI PORCINI", price: 100.0, img: "menu/TAGLIATELLE-AL-FUNGHI-PORCINI.webp" },
    { name: "PÂTES FAJITAS", price: 100.0, img: "menu/PATES-FAJITAS.webp" },
    { name: "RAVIOLI ALLA BAVA", price: 110.0, img: "menu/RAVIOLI-ALLA-BAVA.webp" },
    { name: "TAGLIATELLE LUIGI", price: 100.0, img: "menu/TAGLIATELLE-LUIGI.webp" },
    { name: "PATES POULET CHAMPIGNONS", price: 100.0, img: "menu/PATES-FAJITAS.webp" },
    { name: "PENNE AL TONNO", price: 95.0, img: "menu/PENNE-AL-TONNO.webp" },
    { name: "PASTA BURRATA", price: 130.0, img: "menu/pasta-burrata_page-0001.webp" },
    { name: "SPAGHETTI ALLA CARBONARA", price: 100.0, img: "menu/SPAGHETTI-ALLA-CARBONARA.webp" },
    { name: "LINGUINE VONGOLE", price: 130.0, img: "menu/LINGUINES-VONGOLE.webp" },
    { name: "SPAGHETTI AGLIO, OLIO E PEPERONCINO", price: 85.0, img: "menu/SPAGHETTI-AGLIO-OLIO-E-PEPERONCINO.webp" },
    { name: "SPAGHETTI AL PESTO", price: 85.0, img: "menu/SPAGHETTI-AL-PESTO.webp" },
    { name: "TAGLIATELLE À LA BOLOGNAISE", price: 95.0, img: "menu/TAGLIATELLE-A-LA-BOLOGNAISE.webp" },
    { name: "TRIO", price: 150.0, img: "menu/TRIO.webp" },
    { name: "LASAGNE AL FORNO", price: 100.0, img: "menu/LASAGNE-ALA-FORNO.webp" },
    { name: "TAGLIATELLE AL SALMONE", price: 115.0, img: "menu/TAGLIATELLES-AL-SALMONE.webp" },
    { name: "IMPERIAL AUX FRUITS DE MER", price: 200.0, img: "menu/IMPERIAL-AUX-FRUITS-DE-MER.webp" },
    { name: "PÂTES STRAVAGANZA", price: 225.0, img: "menu/PATES-STRAVAGANZA.webp" },
    { name: "SPAGHETTI AI FRUTTI DI MARE", price: 115.0, img: "menu/SPAGHITTI-AI-FRUTTI-DI-MARE.webp" },
    { name: "SPAGHETTI SINATRA", price: 145.0, img: "menu/SPAGHETTI-SINATRA.webp" },
    { name: "PÂTES AUX CRABES ET FRUITS DE MER", price: 145.0, img: "menu/PATES-AUX-CRABES-ET-FRUITS-DE-MER.webp" },
  ],
  viandes: [
    { name: "KEBAB MÉDITERRANÉEN", price: 130.0, img: "menu/Kabab-september-2025_page-0003.webp" },
    { name: "BROCHETTE DE POULET", price: 120.0, img: "menu/23012018-BROCHETTE-DE-POULET-5.webp" },
    { name: "COTE D&#8217;AGNEAU", price: 160.0, img: "menu/23012018-COTE-D’AGNEAU-12.webp" },
    { name: "T-BONE STEAK", price: 160.0, img: "menu/T-BONE-STEAK.webp" },
    { name: "EMINCÉ DE POULET", price: 125.0, img: "menu/Emince-de-poulet.webp" },
    { name: "POISSON FRAIS", price: 165.0, img: "menu/POISSON-FRAIS-1.webp" },
    { name: "MIXED GRILL", price: 160.0, img: "menu/MIXED-GRILL-2.webp" },
    { name: "SCALOPPINE DU CHEF", price: 130.0, img: "menu/Escalope-du-Chef.webp" },
    { name: "SCALOPPINE ALLA MILANESE", price: 120.0, img: "menu/SCALOPPINE-ALLA-MILANESE.webp" },
    { name: "ASSIETTE DE FRITES MAISON", price: 30.0, img: "menu/ASSIETTE-DE-FRITES-MAISON.webp" },
    { name: "SCALOPPINE DE POULET GRILLÉE", price: 130.0, img: "menu/SCALOPPINE-DE-POULET-GRILLE.webp" },
    { name: "FILETTO ALLA GRIGLIA", price: 160.0, img: "menu/FILETTO-ALLA-GRIGLIA.webp" },
    { name: "ENTRECÔTE", price: 160.0, img: "menu/ENTRECOTE.webp" },
    { name: "EMINCÉ DE FILET DE BŒUF", price: 150.0, img: "menu/EMINCE-DE-FILET-DE-BŒUF.webp" },
    { name: "SCALOPPINE AL LIMONE", price: 125.0, img: "menu/SCALOPPINE-AL-LIMONE.webp" },
    { name: "CHICKEN PARMIGIANA AL FREDO / PENNE", price: 120.0, img: "menu/POULET-AL-FREDO-PENNE.webp" },
    { name: "CHICKEN PARMIGIANA / PENNE", price: 120.0, img: "menu/POULET-PARMIGIANA-PENNE.webp" },
  ],
  enfants: [
    { name: "MINI PIZZA", price: 80.0, img: "menu/Mini-Pizza-Margarita.webp" },
    { name: "NUGGETS + FRITES MAISON", price: 80.0, img: "menu/Nuggets.webp" },
    { name: "HAMBURGER + FRITES MAISON", price: 80.0, img: "menu/Hamburger.webp" },
    { name: "MINI LASAGNE", price: 80.0, img: "menu/Lasagne-Bolognaise.webp" },
    { name: "MINI PÂTES CRÈME FRAÎCHE", price: 80.0, img: "menu/Penne-sauce-Blanche.webp" },
    { name: "MINI PÂTES BOLOGNAISE", price: 80.0, img: "menu/Spaghetti-Bolognaise.webp" },
  ],
  desserts: [
    { name: "FONDANT PISTACHE", price: 60.0, img: "menu/FANDANT-PISTACHE.webp" },
    { name: "BOWL AÇAI", price: 85.0, img: "menu/IMG_4195.webp" },
    { name: "ASSIETTE GOURMANDE/2", price: 110.0, img: "menu/luigi-13.webp" },
    { name: "TARTE DU JOUR", price: 40.0, img: "menu/TARTE-DU-JOUR.webp" },
    { name: "DEUX BOULES DE GLACE", price: 40.0, img: "menu/DEUX-BOULE-DE-GLACE.webp" },
    { name: "ASSIETTE GOURMANDE/4", price: 160.0, img: "menu/ASSIETTE-GOURMANDE.webp" },
    { name: "CRÈME BRÛLÉE", price: 30.0, img: "menu/CREME-BRULEE-1.webp" },
    { name: "PARFAIT AU CHOCOLAT", price: 40.0, img: "menu/PARFAIT-AU-CHOCOLAT.webp" },
    { name: "ASSIETTE DE FRUITS", price: 40.0, img: "menu/ASSIETTE-DE-FRUITS.webp" },
    { name: "NOUGAT GLACÉ", price: 40.0, img: "menu/NOUGAT-GLACE.webp" },
    { name: "FONDANT AU CHOCOLAT", price: 45.0, img: "menu/FONDANT-AU-CHOCOLAT-1.webp" },
    { name: "PANNA COTTA", price: 30.0, img: "menu/PANACOTA-Website.webp" },
    { name: "TIRAMISU", price: 45.0, img: "menu/TIRAMISSU.webp" },
    { name: "CRÈME CARAMEL", price: 30.0, img: "menu/CREME-CARAMEL.webp" },
    { name: "DESSERT DU JOUR", price: 45.0, img: "menu/DESSERT-DU-JOUR-1.webp" },
  ],
  boissons: [
    { name: "JUS D&#8217;AÇAI", price: 45.0, img: "menu/Jus-dacai-2_page-0001.webp" },
    { name: "BIÈRE SANS ALCOOL", price: 40.0, img: "menu/BIERE-SANS-ALCOOL.webp" },
    { name: "INFUSION", price: 25.0, img: "menu/INFUSION.webp" },
    { name: "THÉ À LA MENTHE", price: 25.0, img: "menu/THE-A-LA-MENTHE-1.webp" },
    { name: "CAPPUCCINO", price: 25.0, img: "menu/cappucino.webp" },
    { name: "CAFÉ AU LAIT", price: 25.0, img: "menu/cafe-creme.webp" },
    { name: "CAFÉ FRAPPÉ", price: 25.0, img: "menu/café_frappé.webp" },
    { name: "CAFÉ NESPRESSO", price: 25.0, img: "menu/nespresso.webp" },
    { name: "CAFÉ ESPRESSO", price: 20.0, img: "menu/CAFE-ESPRESSO.webp" },
    { name: "SAN PELLEGRINO", price: 35.0, img: "menu/s-pellegrino-glass-250ml.webp" },
    { name: "SAN PELLEGRINO", price: 45.0, img: "menu/sanpellegrino_1L.webp" },
    { name: "EAU GAZEUSE / EAU MINERALE", price: 15.0, img: "menu/luigi-default.webp" },
    { name: "EAU GAZEUSE / EAU MINERALE", price: 30.0, img: "menu/luigi-default.webp" },
    { name: "BOISSON GAZEUSE", price: 25.0, img: "menu/luigi-default.webp" },
    { name: "COCKTAIL DE FRUITS", price: 40.0, img: "menu/COCKTAIL-DE-FRUITS.webp" },
    { name: "JUS DE CAROTTES", price: 35.0, img: "menu/JUS-DE-CAROTTES.webp" },
    { name: "JUS DE MANGUE ET FRAISE", price: 40.0, img: "menu/JUS-DE-MANGUE-ET-FRAISE.webp" },
    { name: "JUS D&#8217;ORANGE FRAIS PRESSÉ", price: 35.0, img: "menu/JUS-DORANGE-FRAIS-PRESSE.webp" },
    { name: "JUS DE CITRON FRAIS", price: 35.0, img: "menu/JUS-DE-CITRON-FRAIS.webp" },
  ],
};

const WA_NUMBER = "212661489955";
const grid = document.getElementById("menuGrid");
const cartFab = document.getElementById("cartFab");
const cartBadge = document.getElementById("cartBadge");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartOrder = document.getElementById("cartOrder");
const waFloat = document.getElementById("waFloat");

const ALL = {};
for (const cat in MENU) MENU[cat].forEach(item => { ALL[cat + "|" + item.name] = { ...item }; });

let CART = {};
let currentCat = "tacos";

function qtyOf(key) { return CART[key] || 0; }

function addControlHtml(item, key) {
  const q = qtyOf(key);
  if (!q) {
    return `<div class="menu-card-add"><button class="btn-add" data-action="add" data-key="${key}">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
      Ajouter
    </button></div>`;
  }
  return `<div class="menu-card-add qty-stepper">
    <button data-action="dec" data-key="${key}" aria-label="Retirer un">−</button>
    <span class="qty-value">${q}</span>
    <button data-action="inc" data-key="${key}" aria-label="Ajouter un">+</button>
  </div>`;
}

function render(cat) {
  currentCat = cat;
  grid.innerHTML = "";
  (MENU[cat] || []).forEach((item, i) => {
    const key = cat + "|" + item.name;
    const card = document.createElement("div");
    card.className = "menu-card";
    card.style.animationDelay = (i * 40) + "ms";
    const price = item.price ? `<span class="menu-card-price">${item.price} DH</span>` : `<span class="menu-card-price">Sur place</span>`;
    const badge = item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : "";
    const desc = item.desc ? `<p class="menu-card-desc">${item.desc}</p>` : "";
    card.innerHTML = `
      <div class="menu-card-img"><img src="assets/img/${item.img}" alt="${item.name}" loading="lazy"></div>
      <div class="menu-card-body">
        <div class="menu-card-title"><h3>${item.name}</h3>${price}</div>
        ${desc}${badge}
        ${addControlHtml(item, key)}
      </div>`;
    const cardImg = card.querySelector(".menu-card-img img");
    if (cardImg) {
      if (cardImg.complete && cardImg.naturalWidth) cardImg.classList.add("shown");
      else cardImg.addEventListener("load", () => cardImg.classList.add("shown"), { once: true });
    }
    grid.appendChild(card);
  });
}

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
});

function cartCount() { return Object.values(CART).reduce((a, b) => a + b, 0); }

function cartTotalPrice() {
  let t = 0;
  for (const key in CART) if (ALL[key].price) t += ALL[key].price * CART[key];
  return t;
}

function waText(prefix) {
  const lines = Object.entries(CART)
    .map(([key, q]) => {
      const it = ALL[key];
      const price = it.price ? ` — ${it.price * q} DH` : " — prix sur place";
      return `  • ${q} × ${it.name}${price}`;
    })
    .join("\n");
  const total = cartTotalPrice();
  let pay = "";
  const payBtn = document.querySelector(".pay-choice.active");
  if (payBtn) pay = "\n\nPaiement : " + payBtn.dataset.pay;
  return prefix + "\n" + lines + (total ? `\n\nTotal : ${total} DH` : "") + pay;
}

document.querySelectorAll(".pay-choice").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".pay-choice").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
  })
);

function syncUI() {
  const count = cartCount();
  if (count > cartBadge.dataset.last) {
    cartBadge.classList.remove("pulse");
    void cartBadge.offsetWidth;
    cartBadge.classList.add("pulse");
  }
  cartBadge.dataset.last = count;
  cartBadge.textContent = count;

  if (count > 0) {
    cartFab.classList.add("visible");
    waFloat.classList.add("with-cart");
    waFloat.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(waText("Salam Luigi Sidi Maarouf, je souhaite commander :"));
  } else {
    cartFab.classList.remove("visible");
    waFloat.classList.remove("with-cart");
    waFloat.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent("Salam Luigi Sidi Maarouf, je souhaite passer une commande");
  }

  renderCartList();
  render(currentCat);
}

function renderCartList() {
  cartItems.innerHTML = "";
  const keys = Object.keys(CART);
  if (!keys.length) {
    cartItems.innerHTML = '<div class="cart-empty">Votre panier est vide.<br>Ajoutez des plats pour commander.</div>';
    cartOrder.disabled = true;
    cartOrder.style.opacity = ".5";
    cartTotal.textContent = "0 DH";
    return;
  }
  cartOrder.disabled = false;
  cartOrder.style.opacity = "1";
  keys.forEach(key => {
    const it = ALL[key];
    const q = CART[key];
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img class="cart-item-thumb" src="assets/img/${it.img}" alt="${it.name}" loading="lazy">
      <div>
        <div class="cart-item-name">${it.name}</div>
        <div class="cart-item-price">${it.price ? it.price + " DH" : "Prix sur place"}</div>
        <div class="cart-item-row">
          <div class="qty-stepper">
            <button data-action="dec" data-key="${key}" aria-label="Retirer un">−</button>
            <span class="qty-value">${q}</span>
            <button data-action="inc" data-key="${key}" aria-label="Ajouter un">+</button>
          </div>
          <button class="cart-remove" data-action="remove" data-key="${key}">Retirer</button>
        </div>
      </div>
      <div style="font-weight:700;align-self:start">${it.price ? it.price * q + " DH" : "—"}</div>`;
    cartItems.appendChild(row);
  });
  cartTotal.textContent = cartTotalPrice() + " DH";
}

cartItems.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const { action, key } = btn.dataset;
  if (action === "inc") CART[key] = (CART[key] || 0) + 1;
  else if (action === "dec") {
    CART[key] = (CART[key] || 0) - 1;
    if (CART[key] <= 0) delete CART[key];
  } else if (action === "remove") delete CART[key];
  syncUI();
});

const orderLabel = document.getElementById("orderLabel");
let orderArmed = false, orderTimer = null;
function orderReset(sent) {
  orderArmed = false;
  orderLabel.textContent = "Commander sur WhatsApp";
  cartOrder.classList.remove("armed");
  if (sent) cartOrder.classList.add("sent");
  setTimeout(() => cartOrder.classList.remove("sent"), 2200);
}
cartOrder.addEventListener("click", () => {
  if (!cartCount()) return;
  if (!orderArmed) {
    orderArmed = true;
    orderLabel.textContent = "Confirmer la commande ?";
    cartOrder.classList.add("armed");
    clearTimeout(orderTimer);
    orderTimer = setTimeout(orderReset, 7000);
    return;
  }
  clearTimeout(orderTimer);
  const text = waText("Salam Luigi Sidi Maarouf, je souhaite commander :");
  window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
  orderLabel.textContent = "Envoyé ✓";
  orderReset(true);
});

cartFab.addEventListener("click", () => openCart());
document.getElementById("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function openCart() { cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart() { cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }

document.getElementById("tabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  render(tab.dataset.cat);
});

render("tacos");
syncUI();

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggle.classList.toggle("open");
});
nav.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("open");
  });
});

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const pos = window.scrollY + 120;
  let current = "accueil";
  sections.forEach(sec => {
    if (pos >= sec.offsetTop) current = sec.id;
  });
  document.querySelectorAll(".nav-link").forEach(l => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
});
/* ---------- Réservation WhatsApp ---------- */
const resForm = document.getElementById("reservationForm");
const resLabel = document.getElementById("resLabel");
let resArmed = false, resTimer = null;
function resReset() {
  resArmed = false;
  resLabel.textContent = "Réserver sur WhatsApp";
  resSubmit.classList.remove("armed");
}
resForm && resForm.addEventListener("submit", (e) => {
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
    setTimeout(resReset, 3000);
    return;
  }
  if (!resArmed) {
    resArmed = true;
    resLabel.textContent = "Confirmer la réservation ?";
    resSubmit.classList.add("armed");
    clearTimeout(resTimer);
    resTimer = setTimeout(resReset, 7000);
    return;
  }
  clearTimeout(resTimer);
  const d = date.split("-");
  const prettyDate = d.length === 3 ? d[2] + "/" + d[1] + "/" + d[0] : date;
  const lines = [
    "Réservation Luigi Sidi Maarouf",
    "—",
    "Date : " + prettyDate,
    "Heure : " + time,
    "Personne(s) : " + people,
    "Nom : " + name,
    "Téléphone : " + phone
  ];
  if (email) lines.push("Email : " + email);
  if (msg) lines.push("Message : " + msg);
  const text = "Bonjour Luigi Sidi Maarouf," + "\n" + lines.join("\n");
  window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
  resLabel.textContent = "Envoyé ✓ Quelle présence ?";
  setTimeout(resReset, 2600);
});
