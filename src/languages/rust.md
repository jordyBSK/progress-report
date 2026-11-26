# Rust <Badge type="tip" text="Rust" />

---
![logo rust](../images/rust.png)

Rust est un langage de programmation moderne conçu pour offrir à la fois des performances élevées et une sécurité de la mémoire. Il vise à résoudre les problèmes les plus courants rencontrés dans le développement, en particulier ceux qui concernent la gestion de la mémoire et la prévention des erreurs.

Je l'ai appris chez **Jobtrek** en réalisant une todo list en ligne de commande.

## Concepts appris

### Les références

En Rust, l'utilisation des références garantit la sécurité dès la compilation et rend le code plus efficace en permettant l'accès aux données sans les copier, évitant ainsi les erreurs de type et l'allocation inutile d'espace mémoire.

```rust
fn main() {
    let mut x: i32 = 5; // Utilisation de mut pour permettre la modification de la valeur de x

    // Création d'une référence à x
    let y = &mut x;

    // Modification de la valeur de x à travers la référence y
    *y = 10;

    // Affichage de la nouvelle valeur de x
    println!("Nouvelle valeur de x: {}", x);
}

```

### Les structures


Les structures en Rust permettent d'organiser les données de manière efficace et de créer des types personnalisés pour représenter des concepts spécifiques dans son programme.
```rust
// Définition d'une structure représentant un étudiant
struct Etudiant {
    nom: String,
    age: u8,
    classe: String,
}

fn main() {
    // Création d'un étudiant
    let etudiant1 = Etudiant {
        nom: String::from("Jean"),
        age: 20,
        classe: String::from("Terminale"),
    };

    // Affichage des informations sur l'étudiant
    println!("Nom: {}", etudiant1.nom);
    println!("Âge: {}", etudiant1.age);
    println!("Classe: {}", etudiant1.classe);
}
```

### La mutabilité


Le mot-clé mut en Rust permet de déclarer des variables comme mutables, autorisant ainsi la modification de leur valeur après leur initialisation.

```rust
fn main() {
    // Déclaration d'une variable entière mutable
    let mut x: i32 = 5;

    // Affichage de la valeur initiale de x
    println!("Valeur initiale de x: {}", x);

    // Modification de la valeur de la variable x
    x = 10;

    // Affichage de la nouvelle valeur de x
    println!("Nouvelle valeur de x: {}", x);

}
```

### Le pattern matching avec `match`

`match` compare une valeur à plusieurs cas possibles. Le compilateur vérifie que tous les cas sont traités. Dans la todo list, il sert à exécuter la bonne commande.

```rust
fn main() {
    let command = "add";

    match command {
        "add" => println!("Ajouter une tâche"),
        "remove" => println!("Supprimer une tâche"),
        "list" => println!("Afficher les tâches"),
        _ => println!("Commande inconnue"),
    }
}
```

### La gestion des erreurs avec `Result`

Rust n'a pas d'exceptions. Une fonction qui peut échouer renvoie un `Result` : `Ok` avec la valeur, ou `Err` avec l'erreur. L'opérateur `?` transmet l'erreur à la fonction appelante.

```rust
use std::fs;
use std::io;

fn load_tasks(path: &str) -> Result<Vec<String>, io::Error> {
    let content = fs::read_to_string(path)?;
    Ok(content.lines().map(String::from).collect())
}
```

### Les itérateurs

Les itérateurs (`iter`, `map`, `filter`, `enumerate`) permettent de parcourir et transformer une collection sans écrire de boucle à la main.

```rust
fn main() {
    let tasks = vec!["Faire les courses", "Réviser Rust", "Appeler Jean"];

    for (index, task) in tasks.iter().enumerate() {
        println!("{}. {}", index + 1, task);
    }
}
```



## Mes projets en Rust

- [Rust Todo List](../projects/rust-todo.md)