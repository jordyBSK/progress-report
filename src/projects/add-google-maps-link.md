# Création de liens Google Maps pour les bureaux de terrain

* **Technologies :** Odoo, Python, XML, JavaScript, GMC API, Google Maps
* **Date de réalisation :** [À compléter]
* **Durée :** [À compléter]
* **Lieu de réalisation :** Compassion Suisse, Rue Galilée 3, 1400 Yverdon-les-Bains
* **Note :** [À compléter]
* **Compétences opérationnelles acquises :** [À compléter]

## Description

Après la migration vers Odoo 14, l'équipe SDS n'avait plus accès à la carte interactive des bureaux de terrain qui était auparavant disponible directement dans Odoo. La solution utilisée temporairement via les comptes Okta de Compassion International n'était pas suffisamment pratique et certains collaborateurs SDS n'y avaient pas accès.

En attendant la réintégration complète de la carte interactive dans une future version d'Odoo, une solution intermédiaire a été mise en place afin de permettre aux utilisateurs d'accéder rapidement à la localisation d'un bureau directement depuis Odoo.

Les coordonnées GPS des bureaux de terrain, notamment la **latitude** et la **longitude**, sont fournies par l'API GMC.

**Travaux effectués :**

1. **Analyse du besoin :** J'ai étudié la proposition visant à remplacer temporairement la carte interactive par des liens permettant d'ouvrir directement la localisation d'un bureau dans Google Maps.

2. **Échange avec l'équipe SDS :** J'ai pris en compte les besoins de l'équipe SDS afin de déterminer où les liens vers Google Maps seraient les plus utiles et accessibles dans Odoo.

3. **Récupération des coordonnées GPS :** J'ai utilisé les informations de latitude et de longitude fournies par l'API GMC pour identifier précisément la position géographique de chaque bureau de terrain.

4. **Création des liens dynamiques :** J'ai développé un mécanisme permettant de transformer les coordonnées GPS en liens cliquables. Le lien est généré à partir de la latitude et de la longitude du bureau.

5. **Ouverture dans Google Maps :** Les liens ont été configurés pour ouvrir directement la localisation correspondante dans **Google Maps**, dans un nouvel onglet du navigateur.

6. **Tests :** J'ai vérifié que les liens générés correspondent bien aux coordonnées fournies par l'API et que la localisation s'ouvre correctement dans un nouvel onglet.

**Résultat :**

* Les utilisateurs SDS peuvent accéder rapidement à la localisation d'un bureau depuis Odoo.
* Les coordonnées GPS provenant de l'API GMC sont utilisées automatiquement pour générer les liens.
* Un clic sur le lien ouvre directement la position correspondante dans Google Maps dans un nouvel onglet.
* Cette solution constitue une alternative temporaire à la carte interactive en attendant sa réintégration complète dans Odoo.
