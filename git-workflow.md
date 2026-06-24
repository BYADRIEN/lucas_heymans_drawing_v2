# 📌 Git Workflow - Personal Projects

Bienvenue dans mon guide de gestion Git pour mes projets personnels.

L'objectif est de garder un historique propre, une organisation claire et un projet facile à maintenir dans le temps.

---

# 🌳 Organisation des branches

Le workflow utilisé :

```text
main
│
├── feature/*
├── fix/*
├── refactor/*
└── remove/*
```

---

# 🚀 Branche principale

## `main`

La branche `main` représente la version stable du projet.

### Règles :

✅ Contient uniquement du code fonctionnel  
✅ Version prête à être utilisée ou déployée  
❌ Aucun développement directement dessus  

Toutes les modifications doivent passer par une branche dédiée.

---

# ✨ Nouvelle fonctionnalité

Pour ajouter une fonctionnalité :

Format :

```text
feature/nom-fonctionnalite
```

Exemples :

```text
feature/user-authentication
feature/payment-system
feature/contact-page
feature/dashboard
```

Création de la branche :

```bash
git checkout main
git pull
git checkout -b feature/nom-fonctionnalite
```

Après les modifications :

```bash
git add .
git commit -m "feat: add new functionality"
git push origin feature/nom-fonctionnalite
```

---

# 🐛 Correction de bug

Pour corriger un problème :

Format :

```text
fix/nom-du-bug
```

Exemples :

```text
fix/navbar-mobile
fix/footer-responsive
fix/login-error
```

Commit :

```bash
git add .
git commit -m "fix: correct navbar mobile issue"
git push
```

---

# ♻️ Refactorisation

Pour améliorer le code sans changer son fonctionnement.

Format :

```text
refactor/nom-modification
```

Exemples :

```text
refactor/clean-components
refactor/improve-api
refactor/database-structure
```

Commit :

```bash
git commit -m "refactor: improve code structure"
```

---

# 🗑️ Suppression

Pour supprimer une fonctionnalité, un composant ou du code inutile.

Format :

```text
remove/nom-element
```

Exemples :

```text
remove/old-component
remove-unused-files
```

Commit :

```bash
git commit -m "remove: delete unused component"
```

---

# 📝 Convention des commits

Les messages de commit doivent être courts et explicites.

## Types utilisés :

| Type | Utilisation |
|---|---|
| feat | Nouvelle fonctionnalité |
| fix | Correction d'un bug |
| style | Modification CSS/UI |
| refactor | Amélioration du code |
| docs | Documentation |
| chore | Maintenance |

---

## Exemples :

✅ Bon :

```bash
feat: add subscription page

fix: resolve mobile menu issue

style: improve homepage design

refactor: simplify user validation

docs: update README
```

❌ À éviter :

```text
modif
test
changement
aaa
update
```

---

# 🔄 Workflow quotidien

Avant de commencer une modification :

```bash
git status
git pull
git checkout -b nouvelle-branche
```

Pendant le développement :

```bash
git add .
git commit -m "message clair"
```

Envoyer la branche :

```bash
git push origin nom-de-la-branche
```

---

# 🔀 Fusion dans main

Avant de fusionner :

Vérifier :

- ✅ Le projet fonctionne
- ✅ Aucun bug bloquant
- ✅ Le code est propre
- ✅ Les fichiers inutiles sont supprimés
- ✅ Les commits sont compréhensibles

Fusion :

```bash
git checkout main
git pull
git merge nom-de-la-branche
git push
```

---

# 🧹 Bonnes pratiques

## Toujours :

✅ Faire une branche avant une modification importante  
✅ Garder des commits petits et compréhensibles  
✅ Supprimer les branches terminées  
✅ Écrire des messages de commit précis  

## Éviter :

❌ Modifier directement `main`  
❌ Faire un gros commit avec 50 changements différents  
❌ Garder des branches inutilisées pendant des mois  

---

# 📂 Exemple complet

Nouvelle fonctionnalité :

```bash
git checkout main

git pull

git checkout -b feature/new-profile

# développement

git add .

git commit -m "feat: add user profile page"

git push origin feature/new-profile
```

Puis fusion :

```bash
git checkout main

git merge feature/new-profile

git push
```

---

# 🎯 Objectif

Avoir un projet :

- 📁 organisé
- 🚀 facile à faire évoluer
- 🧹 simple à maintenir
- 🔎 facile à reprendre après plusieurs mois

Même en travaillant seul, une bonne organisation Git permet de travailler comme dans une vraie équipe professionnelle.