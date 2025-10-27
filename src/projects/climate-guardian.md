#  Climate-Guardian

Le projet **Climate-Guardian** a été réalisé pour l'organisation à but non lucratif **Memoires-informatiques**.  
Cette organisation possède un vaste patrimoine d'ordinateurs anciens et d’appareils électroniques rares, nécessitant un **stockage dans des conditions environnementales stables** afin d’éviter toute dégradation due à la chaleur ou à l’humidité.

---

## Objectif du projet

L’objectif principal de ce projet est de **surveiller en temps réel la température et l’humidité** des différentes pièces de stockage de l’organisation.  
Les données collectées sont ensuite **affichées sur une interface web ergonomique**, permettant aux responsables de :

- **Suivre les variations climatiques**,
- **Prévenir les risques de surchauffe**,
- **Assurer une meilleure conservation du matériel**.

---

## Technologies utilisées

###  React
Utilisé pour le développement de l’**interface utilisateur moderne, dynamique et réactive**.  
L’application web permet une **visualisation claire et intuitive** des données, avec des graphiques, des alertes et une navigation fluide entre les différentes zones surveillées.

### PostgreSQL
Employé comme **base de données relationnelle** pour stocker l’historique des mesures de température et d’humidité.  
Ce choix garantit :
- **Fiabilité** des enregistrements,
- **Robustesse** face à un grand volume de données,
- **Performance** dans les requêtes et analyses.

### PostgREST
Utilisé comme **API RESTful automatique** connectée à la base PostgreSQL.  
Il permet de **rendre les données accessibles à l’application React** de manière simple et sécurisée, sans développement backend complexe.  
Cette approche favorise une architecture **légère, modulaire et maintenable**.

---

## Fonctionnement général

1. Des capteurs mesurent en continu la température et l’humidité dans chaque salle.
2. Les données sont enregistrées dans la base **PostgreSQL**.
3. **PostgREST** expose ces informations via une **API REST**.
4. L’application **React** interroge cette API pour **afficher en temps réel les relevés climatiques** et **déclencher des alertes** en cas de dépassement de seuils critiques.

---
