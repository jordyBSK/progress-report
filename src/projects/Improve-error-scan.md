# Amélioration des messages d’erreur lors de l’importation des lettres par le SDS - 04.12.2024

## Objectif
Rendre les messages d’erreur lors de l’importation des lettres plus compréhensibles pour les utilisateurs non techniques et documenter le workflow de scan.

## Travaux effectués
1. **Amélioration du code d’importation**
    - Ajout de blocs `try/catch` dans le module `sbc_switzerland` pour gérer les erreurs lors de l’importation des lettres.
    - Les erreurs courantes, comme un scan mal effectué, génèrent maintenant des messages compréhensibles par le personnel SDS, et non seulement dans les logs IT.

2. **Ajout de messages d’erreur utilisateur**
    - Les utilisateurs peuvent maintenant voir des messages clairs indiquant la nature du problème et des actions correctives possibles.
    - Les messages sont formulés pour être lisibles par des non-informaticiens tout en conservant la précision nécessaire.

3. **Documentation du workflow**
    - Rédaction d’une documentation détaillée sur le workflow de scan dans la **Knowledge Base** de compassion.odoo.com.
    - Explication des étapes d’importation, des erreurs possibles et des actions correctives pour le personnel SDS.

## Résultat
- Les erreurs lors de l’importation des lettres sont maintenant visibles et compréhensibles par le personnel SDS.
- Les messages techniques inutiles sont masqués, facilitant la résolution directe de problèmes simples.
- Une documentation complète du workflow de scan est disponible pour référence.