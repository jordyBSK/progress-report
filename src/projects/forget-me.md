# Fonction « Forget me » (protection des données) <Badge type="tip" text="Odoo / Python" />

- **Technologies :** Python, Odoo
- **Tickets :** #2601, #2532
- **Date de réalisation :** 01.2025
- **Durée :** [À compléter]
- **Lieu de réalisation :** Compassion Suisse, Rue Galilée 3, 1400 Yverdon-les-Bains
- **Note :** [À compléter]
- **Compétences opérationnelles acquises :** b3, c3, g5, h4

## Description
Le bouton **« Forget me »** permet de supprimer les données personnelles d'un partenaire, conformément au droit à l'oubli (LPD / RGPD). Deux problèmes empêchaient de l'utiliser correctement.

**Travaux effectués :**
1. **Correction de la méthode `forget_me` (#2601) :** dans certains cas, il était impossible d'« oublier » un partenaire. J'ai analysé la méthode, identifié ce qui bloquait la suppression et corrigé le traitement.
2. **Messages d'erreur compréhensibles (#2532) :** quand l'opération échouait, l'utilisateur voyait une erreur technique. J'ai remplacé ces erreurs par des messages clairs qui expliquent pourquoi l'action est impossible et ce qu'il faut faire.

**Résultat :**
- Les données d'un partenaire peuvent de nouveau être supprimées sur demande.
- Les collaborateurs comprennent les messages affichés sans avoir besoin de l'équipe IT.
