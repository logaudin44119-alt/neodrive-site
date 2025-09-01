
# NeoDrive – Site vitrine + backend léger

Un starter propre, rapide et responsive pour ton activité d'installation CarPlay / audio.

## Structure
- `index.html`, `services.html`, `pricing.html`, `gallery.html`, `contact.html`
- `assets/css/style.css`, `assets/js/main.js`, `assets/img/*`
- `backend/` (Express) pour gérer le formulaire de contact (optionnel)

## Lancer en local (statique)
Ouvre `index.html` dans ton navigateur (ou lance un serveur statique si nécessaire).

## Déployer (facile)
- **Netlify / Vercel / GitHub Pages** : dépose le dossier à la racine (sans `backend/`).
- Renseigne tes coordonnées dans `contact.html` et le footer.

## Activer l'envoi de formulaire
1. Déploie `backend/` sur **Render**, **Railway** ou un petit VPS.
2. Crée un fichier `.env` (copie `.env.example`) avec ton SMTP (Mailjet/Brevo…).
3. Dans `assets/js/main.js`, remplace la partie "fake succès" par un `fetch('https://ton-backend/contact', { method:'POST', body:FormData })`.

## Marque
- Nom actuel : **NeoDrive** (modifiable).
- Couleurs : dégradé vert ↔ bleu. Ajuste dans `:root` de `style.css`.

## Astuces
- Remplace les SVG par de vraies photos de tes montages.
- Ajoute tes prix réels dans `pricing.html`.
- Ajoute des avis clients (section à créer si besoin).
