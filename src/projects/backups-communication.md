# Export quotidien de la table (Backups Communication)

- **Technologies :** PostgreSQL, DBeaver
- **Date de réalisation :** Juillet et Août 2024
- **Durée :** [À compléter]
- **Lieu de réalisation :** Compassion Suisse, Rue Galilée 3, 1400 Yverdon-les-Bains
- **Note :** [À compléter]
- **Compétences opérationnelles acquises :** c4, f8

## Description
La table `partner_log_other_interaction` contient l’historique des interactions importantes avec les partenaires. Il était nécessaire d’obtenir des exports fiables et quotidiens de cette table pour certaines dates précises.
L'objectif était de fournir des fichiers CSV complets de la table pour les dates demandées, en s’assurant que chaque backup soit restauré à un moment précis (15:59:00) et que les fichiers soient organisés de façon standardisée.

**Travaux effectués :**
1. **Restauration des backups :** Suivi précis de la documentation pour restaurer les backups à 15:59:00.
2. **Export des données :** Export complet en fichiers CSV à l’aide de DBeaver.
3. **Organisation et livraison :** Dépôt des fichiers CSV dans Google Drive avec une nomination standardisée (`partner_log_other_interaction_YYYY_MM_DD`).
4. **Documentation et suivi :** Documentation de toutes les étapes sur compassion.odoo.com.

**Résultat :**
- Exports complets et fiables livrés.
- Fichiers CSV organisés et accessibles.
- Processus robuste et documenté pour d'éventuelles futures demandes.