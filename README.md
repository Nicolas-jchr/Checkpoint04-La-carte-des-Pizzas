<p align="center">
<img src="./client/src/assets/logo-pizza.png" height=200px>
</p>

## 🚀 Bienvenue sur mon projet checkpoint 4 réalisé à la Wild Code School <br>

## 💥 Les compétences : 

### 🌞 Développer la partie front-end d'une application web ou web mobile sécurisée : 

- Maquetter des interfaces utilisateur web ou web mobile
- Réaliser des interfaces utilisateur statiques web ou web mobile
- Développer la partie dynamique des interfaces utilisateur web ou web mobile

### 📈 Développer la partie back-end d'une application web ou web mobile sécurisée : 

- Mettre en place une base de données relationnelle
- Développer des composants d'accès aux données SQL et NoSQL
- Développer des composants métier coté serveur

### 👑 Les exigences 

- Le site doit être responsive
- Les données sont stockées dans une base de données
- Suis les meilleures pratiques (les tests sont un gros plus)
- Le projet doit être disponible sur ton compte Github personnel
- N'oublie pas tes acronymes préférés : KISS, DRY, SOLID et RTFM !

## 🛠️ Fonctionnalités:

### 👥 Partie Utilisateur:

- L'utilisateur peut voir une liste de pizza provenant du back.
- L'utilisateur peut cliquer sur une pizza pour voir les détails.
- L'utilisateur peut ajouter une pizza.


### 📝 Dans cette version:

- Les pages sont fonctionnels
- Les informations proviennent de la base de données
- Il est possible d'ajouter une pizza
- la version mobile est fonctionnel

### 🔜 A venir:

- Créer un compte / Se connecter
- Commander des pizzas
- Les envoyer à Benoît

## 🏗️ Structure de l'application

```mermaid
graph TD;
    Accueil;
    Accueil-->pizza-details;
    Error404;
```

## 📈 Statut du projet

v1.0 en cours

## Technos utilisé

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 💻 Modélisation de la base de données

## 🛠️ Setup & utilisation

### 📜 Commandes disponibles

- `npm i` : Initialisation du frontend et du backend, ainsi que de tous les outils
- `npm run db:migrate` : Exécute le script de migration de la base de données
- `npm run dev` : Démarre les deux serveurs (frontend + backend) dans un seul terminal
- `npm run dev:client` : Démarre le serveur frontend React
- `npm run dev:server` : Démarre le serveur backend Express
- `lint` : Exécute les outils de validation et refuse le code non conforme (sera exécuté à chaque _commit_)
- `fix` : Corrige les erreurs de linter (exécutez-le si `lint` grogne sur votre code !)

## 📄 Plus d'informations

- Le modèle utilisé pour ce projet est un modèle de fondation Fullstack réalisé par la Wild Code School.

- N'oubliez pas de créer vos fichiers .env pour le frontend et le backend en copiant les fichiers .env.sample de chaque répertoire.

### 🔧 Outils utilisé :

- _Concurrently_ : Permet de lancer plusieurs commandes simultanément dans la même interface de ligne de commande (CLI).
- _Husky_ : Permet d'exécuter des commandes spécifiques déclenchées par des événements git.
- _Vite_ : Alternative à Create-React-App, offrant moins d'outils pour une expérience plus fluide.
- _ESLint_ : Outil de "qualité du code", garantit que les règles choisies seront appliquées.
- _Prettier_ : Outil de "qualité du code" également, se concentre sur le guide de style.
- _Airbnb Standard_ : L'un des "standards" les plus connus, bien qu'il ne soit pas officiellement lié à ES/JS.
- _Nodemon_ : Permet de redémarrer le serveur à chaque mise à jour d'un fichier .js.

### 👥 Créateur :

[Nicolas JUCHEREAU](https://github.com/Nicolas-jchr)
