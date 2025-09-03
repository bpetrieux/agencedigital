# Studio

Studio is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

```bash
npm run build
```
## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation

]🚀 Déploiement (via SSH + rsync)

Déploiement automatique sur SiteGround via rsync.

1. Configurer l’accès SSH
	•	Active l’option SSH dans ton SiteGround Site Tools.
	•	Note ton hostname, ton username et ta clé SSH.

Exemple : user@sitegroundXXX.siteground.net

2. Script de déploiement

Créer un fichier deploy.sh à la racine du projet :

#!/bin/bash
# Déploiement du site Agence Digitale sur SiteGround via rsync

echo "🛠  Build du projet..."
npm run build

echo "🚀 Déploiement sur SiteGround..."
rsync -avz --delete out/ user@sitegroundXXX.siteground.net:/home/USERNAME/public_html/
rsync -avz contact-send.php user@sitegroundXXX.siteground.net:/home/USERNAME/public_html/

echo "✅ Déploiement terminé avec succès !"

3. Rendre le script exécutable

chmod +x deploy.sh

4. Lancer le déploiement
./deploy.sh


# 1. Initialiser le dépôt
git init

# 2. Ajouter tous les fichiers sauf ceux ignorés (.gitignore)
git add .

# 3. Créer ton premier commit
git commit -m "🚀 Initial commit - Site Agence Digitale"

# 4. (Optionnel) Ajouter ton dépôt distant GitHub / GitLab
git remote add origin git@github.com:ton-user/ton-repo.git

# 5. Pousser vers la branche principale
git branch -M main
git push -u origin main
🔒 Sécurité & bonnes pratiques
	•	Jamais commiter node_modules/ ni .env.local.
	•	Stocker les infos sensibles (ex. GA ID, clés SMTP si besoin) dans variables d’environnement.
	•	Vérifier les permissions de contact-send.php (644 recommandé).
	•	S’assurer que le domaine utilise HTTPS (activé par défaut sur SiteGround).

⸻

📊 SEO & Analytics
	•	Meta balises dynamiques via metadata dans chaque page.
	•	Open Graph + Twitter Cards configurés.
	•	Données structurées (JSON-LD) : Organization, Website, Breadcrumb.
	•	Google Analytics 4 avec Consent Mode v2.

⸻

📬 Formulaire de contact
	•	Le formulaire appelle contact-send.php à la racine du serveur.
	•	Envoi des messages via PHPMailer (mode isMail(), sans SMTP).
	•	Redirection vers /contact?sent=1 (succès) ou /contact?sent=0 (échec).