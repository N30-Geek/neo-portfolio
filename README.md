# Portfolio Personnel

Un portfolio moderne et réactif construit avec HTML, CSS et JavaScript pur. Ce projet met en valeur vos compétences, vos projets et vos informations de contact de manière élégante et professionnelle.

## Fonctionnalités

- Design moderne et réactif qui s'adapte à tous les appareils
- Animations fluides et transitions élégantes
- Filtrage des projets par catégorie
- Formulaire de contact fonctionnel
- Barre de navigation fixe avec suivi de la section active
- Bouton de retour en haut de page
- Mode sombre (à venir)

## Structure du Projet

```
neo-portfolio/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles principaux
├── js/
│   └── main.js         # JavaScript principal
├── images/             # Dossier pour les images
└── assets/             # Autres ressources (polices, icônes, etc.)
```

## Personnalisation

### Informations Personnelles
Modifiez le fichier `index.html` pour mettre à jour :
- Votre nom et titre professionnel
- Vre biographie et informations de contact
- Vos compétences et leur niveau
- Vos projets et réalisations

### Couleurs
Les couleurs principales sont définies dans le fichier `css/style.css` sous la section `:root`. Vous pouvez les modifier facilement :

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    --dark-color: #1f2937;
    --light-color: #f9fafb;
    --text-color: #374151;
    --text-light: #6b7280;
}
```

### Images
Pour ajouter votre propre photo de profil :
1. Placez votre image dans le dossier `images/`
2. Mettez à jour le chemin dans le fichier HTML ou remplacez l'icône utilisateur par défaut

## Ajout de Projets
Pour ajouter un nouveau projet, modifiez le tableau `projectItems` dans le fichier `js/main.js` :

```javascript
const projectItems = [
    {
        title: 'Titre du Projet',
        category: 'web', // ou 'app' ou 'design'
        description: 'Description courte du projet',
        image: 'chemin/vers/image.jpg'
    },
    // Ajoutez d'autres projets ici
];
```

## Déploiement
Vous pouvez déployer ce portfolio sur n'importe quel service d'hébergement web comme :
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

## Technologies Utilisées

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript Vanilla
- [Font Awesome](https://fontawesome.com/) pour les icônes

## Licence

Ce projet est sous licence MIT. N'hésitez pas à l'utiliser comme bon vous semble !

## Auteur

[Votre Nom] - [votre.email@exemple.com]
