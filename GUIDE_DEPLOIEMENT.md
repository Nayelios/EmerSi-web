# Guide de déploiement — GROUPE RÉALIS

## Prérequis

- **Node.js** v18+ installé sur votre machine locale
- **Yarn** (gestionnaire de paquets) installé (`npm install -g yarn`)
- Accès SSH ou FTP à votre hébergeur (LWS, Hostinger, etc.)
- Un nom de domaine configuré (ex : grouperealis.com)

---

## 1. Récupérer le code source

Clonez votre repository GitHub :

```bash
git clone https://github.com/VOTRE_UTILISATEUR/VOTRE_REPO.git
cd VOTRE_REPO/frontend
```

---

## 2. Installer les dépendances

```bash
yarn install
```

---

## 3. Configurer les variables d'environnement

Créez ou modifiez le fichier `.env` dans le dossier `frontend/` :

```env
# Si vous n'avez pas de backend, laissez vide ou retirez cette ligne
REACT_APP_BACKEND_URL=https://api.votredomaine.com
```

> **Note :** Si le site fonctionne uniquement en frontend (formulaire en localStorage), 
> cette variable n'est pas nécessaire.

---

## 4. Générer le build de production

```bash
yarn build
```

Cela crée un dossier `build/` contenant tous les fichiers statiques optimisés (HTML, CSS, JS, images).

---

## 5. Déployer les fichiers

### Option A — Via FTP (LWS, Hostinger, OVH, etc.)

1. Connectez-vous à votre espace FTP avec un client comme **FileZilla**
   - Hôte : fourni par votre hébergeur
   - Identifiant / Mot de passe : vos accès FTP
   - Port : 21 (FTP) ou 22 (SFTP)

2. Naviguez vers le dossier racine de votre site :
   - **LWS** : `/htdocs/` ou `/www/`
   - **Hostinger** : `/public_html/`

3. **Supprimez** le contenu existant du dossier (sauf `.htaccess` si vous en avez un personnalisé)

4. **Uploadez tout le contenu** du dossier `build/` (pas le dossier lui-même, mais son contenu)

### Option B — Via SSH (accès terminal)

```bash
# Connectez-vous en SSH
ssh utilisateur@votre-serveur.com

# Naviguez vers le dossier web
cd /var/www/html  # ou /home/utilisateur/public_html

# Supprimez l'ancien contenu
rm -rf *

# Depuis votre machine locale, transférez les fichiers
scp -r build/* utilisateur@votre-serveur.com:/var/www/html/
```

---

## 6. Configurer le fichier .htaccess (Apache)

Pour que le routage React fonctionne correctement (navigation entre les pages), 
créez un fichier `.htaccess` à la racine de votre site (`public_html/` ou `/www/`) :

```apache
Options -MultiViews
RewriteEngine On

# Si le fichier ou dossier demandé existe, le servir directement
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Sinon, rediriger vers index.html (pour le routage React)
RewriteRule ^ index.html [QSA,L]
```

> **Important :** Sans ce fichier, les URLs comme `/systeme` ou `/contact` 
> afficheront une erreur 404 si l'utilisateur rafraîchit la page.

### Si votre hébergeur utilise Nginx :

Ajoutez ceci dans votre configuration Nginx :

```nginx
server {
    listen 80;
    server_name grouperealis.com www.grouperealis.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache des fichiers statiques
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 7. Configurer le SSL (HTTPS)

La plupart des hébergeurs proposent un certificat SSL gratuit via **Let's Encrypt** :

- **Hostinger** : Panneau hPanel → SSL → Installer
- **LWS** : Panneau LWS → Sécurité → Certificat SSL → Activer Let's Encrypt

> Un site en HTTPS est indispensable pour la crédibilité d'une marque premium.

---

## 8. Configurer le nom de domaine

### Chez votre registrar (OVH, Gandi, Namecheap, etc.) :

Modifiez les **DNS** pour pointer vers votre hébergeur :

| Type  | Nom     | Valeur                          |
|-------|---------|---------------------------------|
| A     | @       | IP de votre serveur             |
| CNAME | www     | grouperealis.com                |

> L'IP du serveur est fournie dans le panneau de votre hébergeur.

---

## 9. Vérifications post-déploiement

- [ ] La page d'accueil s'affiche correctement
- [ ] La navigation entre les pages fonctionne (cliquer sur "Expertises", "Contact", etc.)
- [ ] Le rafraîchissement d'une page interne (ex : `/contact`) ne retourne pas de 404
- [ ] Le formulaire de contact fonctionne (sauvegarde en localStorage)
- [ ] Le site est en HTTPS (cadenas dans la barre d'adresse)
- [ ] Le site est responsive (tester sur mobile)
- [ ] Les images se chargent correctement

---

## 10. Optimisations recommandées

### Performance
- Activez la **compression Gzip** sur votre hébergeur
- Activez le **cache navigateur** (via `.htaccess` ou Nginx)

### SEO
- Les balises meta title et description sont déjà intégrées dans le code
- Ajoutez un fichier `sitemap.xml` pour Google Search Console
- Créez un compte Google Search Console et soumettez votre sitemap

### Suivi
- Ajoutez **Google Analytics 4** pour suivre le trafic
- Configurez des **objectifs** sur les soumissions de formulaire

---

## Structure des fichiers après build

```
build/
├── index.html          ← Point d'entrée
├── static/
│   ├── css/            ← Styles compilés
│   ├── js/             ← JavaScript compilé
│   └── media/          ← Images et polices
├── favicon.ico
└── ...
```

---

## Support

En cas de problème :
1. Vérifiez que le `.htaccess` est bien en place
2. Vérifiez que le `mod_rewrite` est activé (Apache)
3. Videz le cache de votre navigateur
4. Consultez les logs d'erreur de votre hébergeur

---

*Document généré pour le projet GROUPE RÉALIS — Août 2025*
