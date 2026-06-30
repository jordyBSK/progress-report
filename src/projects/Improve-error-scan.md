# Amélioration des messages d’erreur lors de l’importation (SDS)

- **Technologies :** Python, Odoo
- **Date de réalisation :** 04.12.2024
- **Durée :** [À compléter]
- **Lieu de réalisation :** Compassion Suisse, Rue Galilée 3, 1400 Yverdon-les-Bains
- **Note :** [À compléter]
- **Compétences opérationnelles acquises :** a1, b4, g1, g5, h4

## Description
L'objectif est de rendre les messages d’erreur lors de l’importation des lettres plus compréhensibles pour les utilisateurs non techniques et de documenter le workflow de scan.

**Travaux effectués :**
1. **Amélioration du code d’importation :** Ajout de blocs `try/catch` dans le module `sbc_switzerland` pour gérer les erreurs lors de l’importation des lettres. Les erreurs courantes génèrent maintenant des messages compréhensibles par le personnel SDS.
2. **Ajout de messages d’erreur utilisateur :** Les utilisateurs peuvent maintenant voir des messages clairs indiquant la nature du problème et des actions correctives possibles.
3. **Documentation du workflow :** Rédaction d’une documentation détaillée sur le workflow de scan dans la Knowledge Base de compassion.odoo.com.

**Résultat :**
- Erreurs visibles et compréhensibles par le personnel SDS.
- Messages techniques masqués pour les utilisateurs.
- Documentation complète disponible.