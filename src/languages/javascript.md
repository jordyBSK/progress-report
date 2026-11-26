# JavaScript <Badge type="tip" text="JS" />

---

![logo JavaScript](../images/javascript.jpeg)

JavaScript est le langage de programmation du web. Il s'exécute dans le navigateur et permet de rendre une page interactive : réagir aux clics, modifier le contenu sans recharger la page ou communiquer avec un serveur.

Je l'ai d'abord appris chez **Jobtrek** avec des projets comme Ecomaille, puis je l'ai utilisé chez **Compassion Suisse** dans Odoo, avec son framework **OWL**, et sur la plateforme MyCompassion.

## Concepts appris

### Manipuler le DOM et les événements

Le DOM représente la page HTML sous forme d'objets. JavaScript peut le modifier quand l'utilisateur fait une action. J'ai utilisé ce principe pour le bouton qui affiche ou masque le mot de passe.

```javascript
const input = document.querySelector("#password");
const button = document.querySelector("#toggle-password");

button.addEventListener("click", () => {
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    button.setAttribute("aria-label", isHidden ? "Masquer" : "Afficher");
});
```

### Les tableaux et les fonctions fléchées

Les méthodes `map`, `filter` et `reduce` permettent de traiter des listes de données en peu de lignes. Dans Ecomaille, elles servent à calculer le total des dépenses.

```javascript
const expenses = [
    { label: "Loyer", amount: 900 },
    { label: "Courses", amount: 350 },
    { label: "Transport", amount: 80 },
];

const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
const bigExpenses = expenses.filter((expense) => expense.amount > 100);

console.log(`Total : ${total} CHF`);
```

### L'asynchrone avec `async` / `await`

Certaines actions prennent du temps, comme envoyer une requête au serveur. `async` / `await` permet d'attendre la réponse sans bloquer la page. C'est le principe de la sauvegarde automatique des brouillons de lettres.

```javascript
let timer;

function scheduleAutosave(letter) {
    // Attendre que l'utilisateur arrête d'écrire avant de sauvegarder
    clearTimeout(timer);
    timer = setTimeout(() => saveDraft(letter), 2000);
}

async function saveDraft(letter) {
    try {
        const response = await fetch("/letters/draft", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(letter),
        });
        if (!response.ok) throw new Error("Erreur de sauvegarde");
    } catch (error) {
        console.error(error);
    }
}
```

### Les graphiques avec Chart.js

[Chart.js](https://www.chartjs.org/) est une bibliothèque qui crée des graphiques à partir de données. Je l'ai utilisée dans Ecomaille pour afficher la répartition du budget.

```javascript
new Chart(document.querySelector("#budget-chart"), {
    type: "doughnut",
    data: {
        labels: expenses.map((e) => e.label),
        datasets: [{ data: expenses.map((e) => e.amount) }],
    },
});
```

## Frameworks

- [React](../framework/react.md)

## Mes projets en JavaScript

- [Ecomaille](../projects/ecomaille.md)
- [Afficher/Masquer le mot de passe](../projects/show-password.md)
- [Page Letters – MyCompassion 2.0](../projects/my-compassion-letters-page.md)
- [Page 404 – MyCompassion 2.0](../projects/404-page.md)
- [Liens Google Maps pour les bureaux terrain](../projects/add-google-maps-link.md)
- [Correction des failles IDOR et XSS](../projects/resolve-security-issues.md)
- [Système de badges](../projects/Badges-gamification.md)
