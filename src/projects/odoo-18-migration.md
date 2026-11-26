# Migration de la plateforme de traduction vers Odoo 18 <Badge type="tip" text="Odoo 18 / Python" />

- **Technologies :** Odoo 18, Python, XML, JavaScript, OWL
- **Tickets :** #3313 (sbc_translation), auth_external
- **Date de réalisation :** 04.2026 – 10.2026
- **Durée :** [À compléter]
- **Lieu de réalisation :** Compassion Suisse, Rue Galilée 3, 1400 Yverdon-les-Bains
- **Note :** [À compléter]
- **Compétences opérationnelles acquises :** a3, d3, g4, g5, g6

## Description
Compassion Suisse migre son Odoo vers la version 18. La plateforme de traduction, utilisée par les traducteurs bénévoles pour traduire les lettres entre parrains et enfants, repose sur des modules qui devaient être portés vers cette nouvelle version. Cette migration était aussi une condition pour développer la [gamification](./Badges-gamification.md) sur la nouvelle version.

**Travaux effectués :**
1. **Migration de `sbc_translation` (#3313, 04.2026 – 05.2026) :** portage du module principal de la plateforme de traduction vers Odoo 18 : adaptation du code Python aux changements d'API, mise à jour des vues XML et des manifestes.
2. **Migration de `auth_external` (10.2026) :** portage du module qui gère l'authentification des traducteurs depuis la plateforme externe.
3. **Adaptation de la plateforme (10.2026) :** adaptation de la plateforme de traduction pour qu'elle fonctionne avec les modules migrés et tests des parcours principaux (connexion, traduction d'une lettre, commentaires).

**Résultat :**
- Les modules de la plateforme de traduction fonctionnent sur Odoo 18.
- La base est prête pour les nouvelles fonctionnalités de gamification.
