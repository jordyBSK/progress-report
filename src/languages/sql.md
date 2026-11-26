# SQL <Badge type="tip" text="SQL" />

---

Le SQL (*Structured Query Language*) est le langage utilisé pour créer, lire et modifier les données d'une base de données relationnelle. Je l'ai utilisé avec **MySQL** chez Jobtrek, puis avec **PostgreSQL**, la base de données d'Odoo, chez Compassion Suisse.

J'utilise aussi **DBeaver**, un outil graphique qui permet d'écrire des requêtes, d'explorer les tables et d'exporter des données.

## Concepts appris

### Lire des données avec `SELECT`

```sql
SELECT name, email
FROM res_partner
WHERE active = true
ORDER BY name;
```

### Relier des tables avec `JOIN`

Une jointure combine les données de plusieurs tables grâce à une clé commune.

```sql
SELECT child.name, picture.date
FROM compassion_child child
JOIN compassion_child_pictures picture ON picture.child_id = child.id
ORDER BY picture.date DESC;
```

### Regrouper et compter avec `GROUP BY`

Pour vérifier les compteurs de la plateforme de traduction, j'ai comparé le nombre de traductions réellement enregistrées avec les valeurs stockées.

```sql
SELECT translator_id, COUNT(*) AS translations
FROM correspondence
WHERE state = 'done'
GROUP BY translator_id
HAVING COUNT(*) > 10;
```

### Combiner des résultats avec `UNION ALL`

Une vue SQL peut rassembler des données de plusieurs tables dans une seule liste. C'est ce que j'ai fait pour afficher les lettres et les photos d'un enfant dans la même timeline.

```sql
SELECT child_id, date, 'letter' AS type FROM correspondence
UNION ALL
SELECT child_id, date, 'picture' AS type FROM compassion_child_pictures;
```

### Exporter des données

Pour récupérer des communications perdues, j'ai restauré des sauvegardes de la base puis exporté les données d'une table en CSV avec DBeaver.

```sql
SELECT *
FROM partner_log_other_interaction
WHERE create_date::date = '2024-07-15';
```

## Mes projets en SQL

- [Tout Doux (Todo PHP)](../projects/todo-php.md)
- [Climate Guardian](../projects/climate-guardian.md)
- [Récupération de communications perdues](../projects/backups-communication.md)
- [Photos des enfants dans la timeline](../projects/child-picture.md)
- [Correction des données de traduction](../projects/Correct-translation-data.md)
