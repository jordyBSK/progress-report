# Climate-Guardian <Badge type="tip" text="React / PostgreSQL / PostgREST" />

- **Technologies :** React, PostgreSQL, PostgREST
- **Date de réalisation :** juin 2024
- **Durée :** 1 mois
- **Lieu de réalisation :** Jobtrek, Rue du Jura 11, 1004 Lausanne
- **Note :** [À compléter]
- **Compétences opérationnelles acquises :** a1, c1, c2, g1, g2, g4, g5

## Description
Le projet **Climate-Guardian** a été réalisé pour l'organisation à but non lucratif **Mémoires-informatiques**. Cette organisation possède un vaste patrimoine d'ordinateurs anciens et d’appareils électroniques rares, nécessitant un stockage dans des conditions environnementales stables afin d’éviter toute dégradation (chaleur, humidité).

L’objectif principal est de surveiller en temps réel la température et l’humidité des différentes pièces de stockage. Les données sont affichées sur une interface web ergonomique permettant de suivre les variations climatiques, prévenir les risques de surchauffe et assurer une meilleure conservation du matériel.

**Fonctionnement général :**
1. Des capteurs mesurent en continu la température et l’humidité.
2. Les données sont enregistrées dans la base **PostgreSQL**.
3. **PostgREST** expose ces informations via une API REST automatique.
4. L’application **React** interroge l'API pour afficher en temps réel les relevés et déclencher des alertes.