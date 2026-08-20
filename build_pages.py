#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Génère les 4 pages du site Luigi avec header/footer partagés
import re

CSS_VER = 8

HEAD = """<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>__TITLE__</title>
  <meta name="description" content="__DESC__">
  <link rel="icon" type="image/png" href="assets/img/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Lato:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css?v=__CSS_VER__">
</head>
<body>
  <div class="demo-strip">Démo de refonte — réalisée sur mesure · version finale livrée sur votre domaine luigi.ma</div>

  <div class="topbar">
    <div class="container topbar-inner">
      <span>Restauration chaude non-stop · 7j/7 de midi à minuit</span>
      <span>Réservation : <a id="topPhoneLink" href="tel:+212522787171">05 22 78 71 71</a></span>
      <span class="topbar-loc">
        <label for="locSelect">Nos adresses</label>
        <select id="locSelect" class="loc-select">
          <option value="sidimaarouf">Luigi Sidi Maarouf</option>
          <option value="maarif">Luigi Maarif</option>
          <option value="darbouazza">Luigi Dar Bouazza</option>
          <option value="palmier">Luigi Palmier</option>
          <option value="dimare">Luigi Di Mare (Tanger)</option>
          <option value="mohammedia">Luigi Mohammedia</option>
          <option value="fes">Luigi Fès</option>
        </select>
      </span>
    </div>
  </div>

  <header class="header" id="header">
    <div class="container header-inner">
      <a href="index.html" class="logo">
        <img src="assets/img/logo.png" alt="Luigi">
        <span class="logo-word">Luigi<em>ristorante italiano</em></span>
      </a>
      <nav class="nav" id="nav" aria-label="Navigation principale">
        <a href="index.html" class="nav-link__HOME__">Accueil</a>
        <a href="menu.html" class="nav-link__MENU__">Le Menu</a>
        <a href="reservation.html" class="nav-link__RESA__">Réservation</a>
        <a href="contact.html" class="nav-link__CONTACT__">Contact</a>
        <a href="menu.html" class="btn btn-primary nav-cta">Commander</a>
      </nav>
      <button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false" aria-controls="nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
"""

FOOT = """  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <img src="assets/img/logo.png" alt="Luigi" class="footer-logo">
          <h3 id="footerName">Luigi Sidi Maarouf</h3>
          <span class="flag-stripe"><span></span><span></span><span></span></span>
          <p class="footer-about">Dans un cadre typiquement raffiné, le restaurant italien le plus réputé du Royaume : pizzas au four, pâtes fraîches maison, grillades et fruits de mer.</p>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p class="footer-sub">Recevez le menu du jour et nos offres — sans spam, promis.</p>
          <form class="newsletter-form" id="newsletterForm" novalidate>
            <input type="email" id="newsletterEmail" placeholder="Votre email" required>
            <button type="submit" id="newsletterBtn">S'inscrire</button>
          </form>
          <p class="newsletter-done" id="newsletterDone" hidden>Inscription envoyée ✓ — bienvenue à la table Luigi.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/luigimaroc/" target="_blank" rel="noopener" class="social-icon" aria-label="Facebook Luigi">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/luigimarocofficiel/" target="_blank" rel="noopener" class="social-icon" aria-label="Instagram Luigi">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <p class="footer-line">Téléphone : <a id="footerPhone" href="tel:+212522787171">05 22 78 71 71</a></p>
          <p class="footer-line">WhatsApp : <a id="footerWa" href="https://wa.me/212661489955" target="_blank" rel="noopener">06 61 48 99 55</a></p>
          <p class="footer-line">Email : <a id="footerEmail" href="mailto:contact@luigi.ma">contact@luigi.ma</a></p>
          <p class="footer-line" id="footerAddr">Rue 40, N° 4, Lot Mandarona, Sidi Maarouf, Casablanca</p>
          <p class="footer-line">7j/7 · de midi à minuit, non-stop</p>
        </div>
      </div>
      <p class="footer-copy">Luigi Sidi Maarouf — Casablanca · Refonte démo</p>
    </div>
  </footer>

__EXTRA_SCRIPTS__  <script src="assets/js/main.js?v=__CSS_VER__"></script>
</body>
</html>
"""

def render(title, desc, body, home="", menu="", resa="", contact="", menu_pg=False):
    html = HEAD + body + FOOT
    html = html.replace("__TITLE__", title).replace("__DESC__", desc)
    extra = '<script src="assets/js/menu_data.js?v=%d"></script>' % CSS_VER if menu_pg else ""
    html = html.replace("__EXTRA_SCRIPTS__", extra)
    html = html.replace("__CSS_VER__", str(CSS_VER))
    html = html.replace("__HOME__", home).replace("__MENU__", menu).replace("__RESA__", resa).replace("__CONTACT__", contact)
    return html

# ---------- PAGE ACCUEIL ----------
index = render(
    "Luigi — Restaurant italien | Pizzas, Pâtes fraîches, Grillades",
    "Luigi : pizzas, pâtes fraîches, viandes grillées, fruits de mer. Chaîne italienne au Maroc — 7 adresses, restauration non-stop de midi à minuit. Commandez en ligne.",
    home=' active',
    body="""
  <section class="hero" id="accueil">
    <div class="hero-bg">
      <img src="assets/img/Luigi-slider-1.jpg" alt="L'ambiance du restaurant Luigi">
    </div>
    <div class="hero-content">
      <span class="hero-badge"><span id="locBadge">Ristorante Italiano · Sidi Maarouf, Casablanca</span></span>
      <h1>Luigi <span id="locName">Sidi Maarouf</span></h1>
      <p class="hero-tag">Pizzas · Pâtes fraîches maison · Grillades · Fruits de mer — <strong>7j/7 · midi à minuit</strong></p>
      <div class="hero-cta">
        <a href="menu.html" class="btn btn-primary">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 7h-3V5a4 4 0 0 0-8 0v2H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-9-2a2 2 0 0 1 4 0v2h-4V5Zm8 13H6V9h12v9Zm-8-10a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></svg>
          Commandez en ligne
        </a>
        <a href="reservation.html" class="btn btn-outline-cream">Réserver une table</a>
      </div>
      <div class="hero-minis">
        <div class="hero-mini">
          <img src="assets/img/menu/IMG-22350000-editedby-YoBEN-ComsideA-4.webp" alt="Pizza Burrata">
          <span><b>Pizza Burrata</b><em>125 DH</em></span>
        </div>
        <div class="hero-mini">
          <img src="assets/img/menu/4-FORMAGGIO.webp" alt="Pizza 4 Fromaggio">
          <span><b>Pizza 4 Fromaggio</b><em>90 DH</em></span>
        </div>
        <div class="hero-mini">
          <img src="assets/img/menu/FRUTTI-DI-MARE.webp" alt="Pizza Frutti di Mare">
          <span><b>Frutti di Mare</b><em>110 DH</em></span>
        </div>
      </div>
    </div>
  </section>

  <section class="info-strip">
    <div class="container info-grid">
      <div class="info-item"><strong>Non-stop</strong><span>de midi à minuit, 7j/7</span></div>
      <div class="info-item"><strong>Panier en ligne</strong><span>commande en quelques clics</span></div>
      <div class="info-item"><strong>Paiement carte</strong><span>en ligne ou à la livraison</span></div>
      <div class="info-item"><strong>Livraison</strong><span>à domicile ou au bureau</span></div>
    </div>
  </section>

  <section class="featured-section">
    <div class="container">
      <div class="section-head">
        <span class="section-tag">I Piatti Famosi</span>
        <h2>Les plats qui font la réputation de Luigi</h2>
        <span class="flag-stripe"><span></span><span></span><span></span></span>
        <p>Une sélection de la carte — retrouvez les 140 plats complets dans le menu en ligne.</p>
      </div>
      <div class="featured-grid">
        <div class="featured-card">
          <div class="featured-img"><img src="assets/img/menu/IMG-22350000-editedby-YoBEN-ComsideA-4.webp" alt="Pizza Burrata"></div>
          <div class="featured-body">
            <h3>Pizza Burrata</h3>
            <p>Burrata crémeuse, tomate, basilic — pâte fine, cuite au four.</p>
            <div class="featured-bottom"><span class="featured-price">125 DH</span><a href="menu.html" class="btn-add">Commander</a></div>
          </div>
        </div>
        <div class="featured-card">
          <div class="featured-img"><img src="assets/img/menu/Spaghetti-Bolognaise.webp" alt="Spaghetti Bolognaise"></div>
          <div class="featured-body">
            <h3>Spaghetti Bolognaise</h3>
            <p>Pâtes fraîches maison, sauce bolognaise traditionnelle à la viande.</p>
            <div class="featured-bottom"><span class="featured-price">95 DH</span><a href="menu.html" class="btn-add">Commander</a></div>
          </div>
        </div>
        <div class="featured-card">
          <div class="featured-img"><img src="assets/img/menu/FRUTTI-DI-MARE.webp" alt="Frutti di Mare"></div>
          <div class="featured-body">
            <h3>Frutti di Mare</h3>
            <p>Fruits de mer, tomate, ail, persil — la mer dans une pizza.</p>
            <div class="featured-bottom"><span class="featured-price">110 DH</span><a href="menu.html" class="btn-add">Commander</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about-section" id="a-propos">
    <div class="container about-grid">
      <div class="about-img">
        <div class="frame">
          <img src="assets/img/photo-1.jpg" alt="L'ambiance du restaurant Luigi">
        </div>
        <div class="side-img">
          <img src="assets/img/photo-4.jpg" alt="La table italienne du Luigi">
        </div>
        <div class="flip-card">
          <div class="flip-inner">
            <div class="flip-face flip-front">
              <div class="flip-pic"><img src="assets/img/menu/Spaghetti-Bolognaise.webp" alt="Spaghetti Bolognaise"></div>
              <div class="flip-body">
                <span class="flip-badge">Pasta</span>
                <strong>Spaghetti Bolognaise</strong>
                <small>Pâtes fraîches · faites maison</small>
              </div>
            </div>
            <div class="flip-face flip-back">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <strong>Fatto in casa</strong>
              <small>Pâtes fraîches préparées chaque jour, à l'italienne</small>
            </div>
          </div>
        </div>
      </div>
      <div class="about-text">
        <span class="section-tag">Il Ristorante</span>
        <h2>Une expérience italienne authentique</h2>
        <span class="flag-stripe"><span></span><span></span><span></span></span>
        <p>Au Luigi Sidi Maarouf, la cuisine italienne se vit dans l'assiette : pizzas cuites au four, pâtes fraîches préparées maison chaque jour, viandes grillées à la perfection et fruits de mer toujours frais.</p>
        <p>Une ambiance chaleureuse, un service attentif et une restauration chaude non-stop : déjeuner rapide, dîner en famille ou pause gourmande entre amis, à toute heure.</p>
        <div class="about-points">
          <div class="about-point">Commandes en ligne & vente à emporter</div>
          <div class="about-point">Livraison à domicile ou au bureau</div>
          <div class="about-point">Menu du jour & menu enfant</div>
          <div class="about-point">Menu spécial entreprises & anniversaires</div>
        </div>
        <div class="about-accent">
          <div class="quote">« Dans un cadre typiquement raffiné, la maison Luigi vous propose les spécialités du restaurant italien le plus réputé du Royaume : risotto aux gambas, langoustes royales, pâtes faites maison, jusqu'au pain, tout est créé par la maison. »</div>
          <div class="sign">Le restaurant italien le plus réputé du Royaume</div>
        </div>
      </div>
    </div>
  </section>

  <section class="gallery-section">
    <div class="container">
      <div class="section-head">
        <span class="section-tag">La Galerie</span>
        <h2>L'ambiance et les assiettes</h2>
        <span class="flag-stripe"><span></span><span></span><span></span></span>
      </div>
      <div class="gallery-grid">
        <img src="assets/img/photo-2.jpg" alt="Luigi ambulance">
        <img src="assets/img/slider-2.jpg" alt="Luigi salle">
        <img src="assets/img/photo-4.jpg" alt="Luigi table">
        <img src="assets/img/photo-6.jpg" alt="Luigi dégustation">
        <img src="assets/img/photo-7.jpg" alt="Luigi intérieur">
        <img src="assets/img/photo-8.jpg" alt="Luigi plats">
      </div>
    </div>
  </section>

  <section class="addresses-section">
    <div class="container">
      <div class="section-head">
        <span class="section-tag">Un seul design, sept adresses</span>
        <h2>La marque Luigi, unifiée</h2>
        <span class="flag-stripe"><span></span><span></span><span></span></span>
        <p>Les 7 adresses officielles de la chaîne que votre propre site référence : 2 sites WordPress de 2017, 1 site moderne (Dar Bouazza), et 4 adresses invisibles en ligne. Cliquez sur une adresse : le site s'adapte instantanément. C'est le principe d'une franchise harmonisée.</p>
      </div>
      <div class="addresses-grid">
        <div class="address-card" data-loc="sidimaarouf">
          <h3>Luigi Sidi Maarouf</h3>
          <p>Rue 40, N° 4, Lot Mandarona, Sidi Maarouf, Casablanca</p>
          <p class="address-tel">05 22 78 71 71</p>
          <button class="btn-add">Choisir cette adresse</button>
        </div>
        <div class="address-card" data-loc="maarif">
          <h3>Luigi Maarif</h3>
          <p>17, rue Normandie, Maarif — Casablanca</p>
          <p class="address-tel">05 22 39 02 71</p>
          <button class="btn-add">Choisir cette adresse</button>
        </div>
        <div class="address-card" data-loc="darbouazza">
          <h3>Luigi Dar Bouazza</h3>
          <p>Centre Mercato, Dar Bouazza</p>
          <p class="address-tel">05 22 33 06 24</p>
          <p class="addr-status ok">Aujourd'hui : site moderne</p>
          <button class="btn-add">Choisir cette adresse</button>
        </div>
        <div class="address-card" data-loc="palmier">
          <h3>Luigi Palmier</h3>
          <p>77, Rue Annassiri, Quartier Palmier, Casablanca</p>
          <p class="address-tel">05 22 23 63 94</p>
          <p class="addr-status bad">Aujourd'hui : site mort (luigipalmier.com)</p>
          <button class="btn-add">Choisir cette adresse</button>
        </div>
        <div class="address-card" data-loc="dimare">
          <h3>Luigi Di Mare</h3>
          <p>Angle Bd Mohamed VI, Corniche, Tanger</p>
          <p class="address-tel">06 61 48 99 55 (central)</p>
          <p class="addr-status bad">Aujourd'hui : aucun site</p>
          <button class="btn-add">Choisir cette adresse</button>
        </div>
        <div class="address-card" data-loc="mohammedia">
          <h3>Luigi Mohammedia</h3>
          <p>Bd Mohamed Zerktouni, Mohammedia</p>
          <p class="address-tel">06 61 48 99 55 (central)</p>
          <p class="addr-status bad">Aujourd'hui : aucun site</p>
          <button class="btn-add">Choisir cette adresse</button>
        </div>
        <div class="address-card" data-loc="fes">
          <h3>Luigi Fès</h3>
          <p>Avenue Otman Ibn Affane, Fès</p>
          <p class="address-tel">05 35 94 00 91</p>
          <p class="addr-status bad">Aujourd'hui : aucun site</p>
          <button class="btn-add">Choisir cette adresse</button>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container cta-inner">
      <h2>Une envie de cuisine italienne ?</h2>
      <p>Commandez en ligne en 2 minutes, ou réservez votre table pour ce soir.</p>
      <div class="hero-cta" style="justify-content:center">
        <a href="menu.html" class="btn btn-primary">Voir le menu & commander</a>
        <a href="reservation.html" class="btn btn-outline">Réserver une table</a>
      </div>
    </div>
  </section>
""")

# ---------- PAGE MENU ----------
menu = render(
    "Menu — Luigi | Pizzas, Pâtes fraîches, Grillades en ligne",
    "Le menu complet du Luigi Sidi Maarouf : plus de 140 plats italiens avec photos et prix. Commandez en ligne, payez par carte ou à la livraison.",
    menu_pg=True,
    menu=' active',
    body="""
  <section class="page-head">
    <div class="container">
      <span class="section-tag">La Carta</span>
      <h1>Le Menu</h1>
      <span class="flag-stripe"><span></span><span></span><span></span></span>
      <p>Plus de 140 plats avec photos et prix — commandez, payez en ligne ou à la livraison.</p>
    </div>
  </section>

  <section class="menu-section" id="menu" style="padding-top:30px">
    <div class="container">
      <div class="tabs" id="tabs">
        <button class="tab active" data-cat="entrees">Entrées</button>
        <button class="tab" data-cat="pizzas">Pizzas</button>
        <button class="tab" data-cat="pates">Pâtes Fraîches</button>
        <button class="tab" data-cat="viandes">Viandes</button>
        <button class="tab" data-cat="enfants">Menu Enfant</button>
        <button class="tab" data-cat="desserts">Desserts</button>
        <button class="tab" data-cat="boissons">Boissons</button>
      </div>
      <div class="menu-grid" id="menuGrid"></div>
      <div class="menu-note">
        <strong>Restauration chaude non-stop</strong> — cuisine ouverte de midi à minuit, livraison à domicile ou au bureau
      </div>
    </div>
  </section>

  <div class="cart-fab" id="cartFab" role="button" tabindex="0" aria-label="Voir le panier">
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    <span class="cart-fab-badge" id="cartBadge">0</span>
  </div>

  <div class="cart-overlay" id="cartOverlay"></div>
  <aside class="cart-drawer" id="cartDrawer" aria-label="Panier">
    <div class="cart-header">
      <h3>Ma commande</h3>
      <button class="cart-close" id="cartClose" aria-label="Fermer">&times;</button>
    </div>
    <div class="cart-items" id="cartItems"></div>
    <div class="cart-footer">
      <div class="cart-total"><span>Total</span><span id="cartTotal">0 DH</span></div>
      <div class="checkout-box" id="checkoutBox">
        <div class="co-type">
          <button type="button" class="co-type-btn active" data-type="livraison">🚚 Livraison</button>
          <button type="button" class="co-type-btn" data-type="emporter">🥡 À emporter</button>
        </div>
        <label class="co-label" for="coName">Nom complet</label>
        <input class="co-input" type="text" id="coName" placeholder="Votre nom" required>
        <label class="co-label" for="coPhone">Téléphone</label>
        <input class="co-input" type="tel" id="coPhone" placeholder="06 XX XX XX XX" required>
        <div class="co-addr" id="coAddrWrap">
          <label class="co-label" for="coAddr">Adresse de livraison</label>
          <input class="co-input" type="text" id="coAddr" placeholder="Quartier, rue, n°">
        </div>
        <label class="co-label">Paiement</label>
        <div class="pay-choices">
          <button type="button" class="pay-choice active" data-pay="carte en ligne">Carte en ligne</button>
          <button type="button" class="pay-choice" data-pay="à la livraison (carte ou espèces)">À la livraison</button>
        </div>
      </div>
      <button class="btn-wa-order" id="cartOrder">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        <span id="orderLabel">Envoyer la commande</span>
      </button>
      <p class="co-note">Votre commande part en un seul message WhatsApp au restaurant — confirmation immédiate.</p>
    </div>
  </aside>
""")

# ---------- PAGE RÉSERVATION ----------
resa = render(
    "Réservation — Luigi | Réservez votre table en ligne",
    "Réservez votre table au Luigi en ligne : date, heure, nombre de personnes. Confirmation immédiate sur WhatsApp.",
    resa=' active',
    body="""
  <section class="page-head">
    <div class="container">
      <span class="section-tag">Réserver une table</span>
      <h1>Le Planning Luigi</h1>
      <span class="flag-stripe"><span></span><span></span><span></span></span>
      <p>Le même planning que le restaurant — confirmation en quelques minutes sur WhatsApp.</p>
    </div>
  </section>

  <section class="reservation-section" style="padding-top:30px">
    <div class="container">
      <div class="reservation-grid">
        <form class="reservation-form" id="reservationForm" novalidate>
          <div class="res-form-row">
            <div class="res-field">
              <label for="res-date">Date</label>
              <input type="date" id="res-date" required>
            </div>
            <div class="res-field">
              <label for="res-time">Heure</label>
              <select id="res-time" required>
                <option value="" disabled selected>Choisir une heure</option>
__SLOTS__
              </select>
            </div>
            <div class="res-field">
              <label for="res-people">Personne(s)</label>
              <select id="res-people">
                <option value="1">1 personne</option>
                <option value="2" selected>2 personnes</option>
                <option value="3">3 personnes</option>
                <option value="4">4 personnes</option>
                <option value="5">5 personnes</option>
                <option value="6">6 personnes</option>
                <option value="7">7 personnes</option>
                <option value="8">8 personnes</option>
                <option value="9">9 personnes</option>
                <option value="10">10 personnes</option>
                <option value="11">11 personnes</option>
                <option value="12">12 personnes</option>
                <option value="13+">Plus de 12</option>
              </select>
            </div>
          </div>
          <div class="res-form-row">
            <div class="res-field">
              <label for="res-name">Nom complet</label>
              <input type="text" id="res-name" placeholder="Votre nom" required>
            </div>
            <div class="res-field">
              <label for="res-phone">Téléphone</label>
              <input type="tel" id="res-phone" placeholder="06 XX XX XX XX" required>
            </div>
            <div class="res-field">
              <label for="res-email">Email <em>(optionnel)</em></label>
              <input type="email" id="res-email" placeholder="vous@email.com">
            </div>
          </div>
          <div class="res-field-wide">
            <label for="res-msg">Message <em>(optionnel)</em></label>
            <textarea id="res-msg" rows="3" placeholder="Occasion spéciale, emplacement préféré, enfants…"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-res-submit" id="resSubmit">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            <span id="resLabel">Réserver sur WhatsApp</span>
          </button>
          <p class="res-note">La demande part en un message WhatsApp au restaurant — confirmation en quelques minutes.</p>
        </form>
        <div class="reservation-info">
          <div class="contact-card">
            <h3>Réservation par téléphone</h3>
            <p><a id="resaPhone" href="tel:+212522787171">05 22 78 71 71</a></p>
          </div>
          <div class="contact-card">
            <h3>WhatsApp réservation</h3>
            <p><a id="resaWa" href="https://wa.me/212661489955">06 61 48 99 55</a></p>
          </div>
          <div class="contact-card">
            <h3>Horaires</h3>
            <p>7j/7 — de midi à minuit, non-stop</p>
          </div>
          <div class="reservation-why">
            <h3>Réservation instantanée</h3>
            <p>La demande arrive directement sur le planning WhatsApp du restaurant — aucune réservation perdue dans une boîte mail.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
""")

slots = ('12:00 AM','12:30 AM','01:00 AM','01:30 AM','02:00 AM','02:30 AM','03:00 AM','03:30 AM','04:00 AM','04:30 AM','05:30 AM','06:00 AM','06:30 AM','07:00 AM','07:30 AM','08:00 AM','08:30 AM','09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','01:00 PM','01:30 PM','02:00 PM','02:30 PM','03:00 PM','03:30 PM','04:00 PM','04:30 PM','05:30 PM','06:00 PM','06:30 PM','07:00 PM','07:30 PM','08:00 PM','08:30 PM','09:00 PM','09:30 PM','10:00 PM','10:30 PM','11:00 PM','11:30 PM')
resa = resa.replace("__SLOTS__", "\n".join(f'<option value="{s}">{s}</option>' for s in slots))

# ---------- PAGE CONTACT ----------
contact = render(
    "Contact — Luigi | Téléphone, WhatsApp, adresses",
    "Contactez le Luigi Sidi Maarouf à Casablanca : téléphone, WhatsApp, email, horaires et plan d'accès. Une question, un événement, un menu d'entreprise ?",
    contact=' active',
    body="""
  <section class="page-head">
    <div class="container">
      <span class="section-tag">Contact & réservation</span>
      <h1>Contactez-nous</h1>
      <span class="flag-stripe"><span></span><span></span><span></span></span>
      <p>Une question, un événement, un menu spécial entreprise ? Écrivez-nous, on répond vite.</p>
    </div>
  </section>

  <section class="contact-section" style="padding-top:30px">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <form class="reservation-form" id="contactForm" novalidate>
            <div class="res-form-row">
              <div class="res-field">
                <label for="ct-name">Nom complet</label>
                <input type="text" id="ct-name" placeholder="Votre nom" required>
              </div>
              <div class="res-field">
                <label for="ct-phone">Téléphone</label>
                <input type="tel" id="ct-phone" placeholder="06 XX XX XX XX">
              </div>
              <div class="res-field">
                <label for="ct-email">Email</label>
                <input type="email" id="ct-email" placeholder="vous@email.com" required>
              </div>
            </div>
            <div class="res-field-wide">
              <label for="ct-topic">Sujet</label>
              <select id="ct-topic" class="co-input">
                <option value="Question générale">Question générale</option>
                <option value="Menu spécial entreprises">Menu spécial entreprises</option>
                <option value="Organisation d'un anniversaire">Organisation d'un anniversaire</option>
                <option value="Commande groupée">Commande groupée</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div class="res-field-wide">
              <label for="ct-msg">Message</label>
              <textarea id="ct-msg" rows="4" placeholder="Votre message…" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block btn-res-submit" id="ctSubmit">
              <span id="ctLabel">Envoyer le message</span>
            </button>
            <p class="res-note">Votre message part en un seul WhatsApp au restaurant — réponse rapide garantie.</p>
          </form>
        </div>
        <div class="contact-map-wrap">
          <div class="contact-card">
            <h3>Téléphone</h3>
            <p><a id="ctPhone" href="tel:+212522787171">05 22 78 71 71</a></p>
          </div>
          <div class="contact-card">
            <h3>WhatsApp</h3>
            <p><a id="ctWa" href="https://wa.me/212661489955">06 61 48 99 55</a></p>
          </div>
          <div class="contact-card">
            <h3>Email</h3>
            <p><a id="ctEmail" href="mailto:contact@luigi.ma">contact@luigi.ma</a></p>
          </div>
          <div class="contact-card">
            <h3>Horaires</h3>
            <p>7j/7 — de midi à minuit, non-stop</p>
          </div>
          <div class="contact-card">
            <h3>Adresse</h3>
            <p id="ctAddr">Rue 40, N° 4, Lot Mandarona, Sidi Maarouf, Casablanca</p>
          </div>
          <div class="contact-map">
            <iframe id="ctMap" src="https://maps.google.com/maps?q=Luigi%20Sidi%20Maarouf%20Casablanca&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Luigi Sidi Maarouf sur Google Maps"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
""")

for name, html in [("index.html", index), ("menu.html", menu), ("reservation.html", resa), ("contact.html", contact)]:
    with open(name, "w", encoding="utf-8") as f:
        f.write(html)
    print(name, "ok", len(html))