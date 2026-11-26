# HTML et CSS <Badge type="tip" text="HTML / CSS" />

---

![logo HTML et CSS](../images/html-css.jpg)

Le **HTML** structure le contenu d'une page web (titres, paragraphes, images, formulaires) et le **CSS** définit son apparence (couleurs, tailles, mise en page). Ce sont les deux premiers langages que j'ai appris chez **Jobtrek**. Je les utilise aujourd'hui chez **Compassion Suisse** dans les templates Odoo de la plateforme MyCompassion.

## Le HTML

### Une structure sémantique

Les balises sémantiques (`header`, `nav`, `main`, `section`, `footer`) décrivent le rôle de chaque partie de la page. Le code est plus lisible et la page est plus accessible pour les lecteurs d'écran et mieux comprise par les moteurs de recherche.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon site</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <a href="/">Accueil</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <main>
        <section>
            <h1>Titre principal</h1>
            <p>Ceci est un paragraphe de texte.</p>
        </section>
    </main>

    <footer>
        <p>© 2025</p>
    </footer>
</body>
</html>
```

### Les formulaires

Les formulaires permettent à l'utilisateur d'envoyer des données. Les attributs comme `required` ou `accept` vérifient la saisie directement dans le navigateur.

```html
<form action="/letters/send" method="post">
    <label for="message">Votre lettre</label>
    <textarea id="message" name="message" required></textarea>

    <label for="photo">Photo (JPG ou PNG)</label>
    <input type="file" id="photo" name="photo" accept="image/jpeg, image/png">

    <button type="submit">Envoyer</button>
</form>
```

## Le CSS

### Les sélecteurs et les variables

Les variables CSS (*custom properties*) évitent de répéter les mêmes couleurs partout et facilitent les changements de design.

```css
:root {
    --primary: #005eb8;
    --text: #1d1d1f;
}

h1 {
    color: var(--primary);
    font-family: Arial, sans-serif;
}

p {
    color: var(--text);
    line-height: 1.5;
}
```

### La mise en page avec Flexbox et Grid

Flexbox aligne des éléments sur une ligne ou une colonne. Grid crée des grilles en deux dimensions. J'ai utilisé Flexbox pour centrer le contenu de la page 404 de MyCompassion.

```css
/* Centrer un contenu horizontalement et verticalement */
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

/* Grille de cartes qui s'adapte à la largeur */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}
```

### Le responsive design

Les *media queries* adaptent la mise en page à la taille de l'écran, pour qu'un site soit utilisable sur mobile comme sur ordinateur.

```css
.menu {
    display: flex;
    gap: 2rem;
}

@media (max-width: 768px) {
    .menu {
        flex-direction: column;
        gap: 1rem;
    }
}
```

## Mes projets en HTML et CSS

- [Integration Web](../projects/integration-web.md)
- [Site statique](../projects/site-static.md)
- [Changement de l'icône de la plateforme de traduction](../projects/change-icon.md)
- [Afficher/Masquer le mot de passe](../projects/show-password.md)
- [Page Letters – MyCompassion 2.0](../projects/my-compassion-letters-page.md)
- [Page 404 – MyCompassion 2.0](../projects/404-page.md)
- [Photos des enfants dans la timeline](../projects/child-picture.md)
