# PHP <Badge type="tip" text="PHP" />

---

![logo PHP](../images/php.png)

PHP est un langage de programmation libre, principalement utilisé côté serveur pour produire des pages web dynamiques. Le serveur exécute le code PHP et envoie au navigateur le HTML généré.

Je l'ai appris chez **Jobtrek** en réalisant une todo list avec connexion, puis un blog avec les frameworks [Slim](../framework/slim.md) et [Twig](../framework/twig.md).

## Concepts appris

### Se connecter à une base de données avec PDO

PDO permet de communiquer avec une base de données comme MySQL. Les **requêtes préparées** protègent contre les injections SQL, car les valeurs de l'utilisateur ne sont jamais insérées directement dans la requête.

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=todo;charset=utf8mb4', 'user', 'password');

$statement = $pdo->prepare('SELECT * FROM tasks WHERE user_id = :user_id');
$statement->execute(['user_id' => $userId]);
$tasks = $statement->fetchAll(PDO::FETCH_ASSOC);
```

### Gérer les mots de passe

Un mot de passe ne doit jamais être enregistré en clair. `password_hash` le chiffre avant de l'enregistrer, et `password_verify` le compare au moment de la connexion.

```php
<?php
// À l'inscription
$hash = password_hash($_POST['password'], PASSWORD_DEFAULT);

// À la connexion
if (password_verify($_POST['password'], $user['password'])) {
    $_SESSION['user_id'] = $user['id'];
}
```

### Les sessions

Une session garde des informations sur l'utilisateur d'une page à l'autre, par exemple pour savoir s'il est connecté.

```php
<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: /login.php');
    exit;
}
```

### Les opérations CRUD

CRUD signifie **C**reate, **R**ead, **U**pdate, **D**elete : les quatre opérations de base sur des données. La todo list permet de créer, afficher, modifier et supprimer des tâches.

```php
<?php
$statement = $pdo->prepare('INSERT INTO tasks (title, user_id) VALUES (:title, :user_id)');
$statement->execute(['title' => $_POST['title'], 'user_id' => $_SESSION['user_id']]);
```

## Frameworks

- [Slim](../framework/slim.md)
- [Twig](../framework/twig.md)

## Mes projets en PHP

- [Tout Doux (Todo PHP)](../projects/todo-php.md)
- [Blog PHP – Twig](../projects/blog-php-twig.md)
