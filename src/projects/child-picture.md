## Extension de la timeline enfant pour inclure les photos des enfants - 19.11.2025

### Objectif
Afficher dans la timeline des enfants, en plus des lettres et des cadeaux, les photos associées à chaque enfant.

### Travaux effectués
1. **Modification de la vue SQL**
   - La vue SQL alimentant la timeline a été étendue pour inclure les données de la table `compassion_child_pictures`.
   - Chaque photo est désormais transformée en un élément de la timeline avec sa date correspondante.

2. **Création des éléments de timeline pour les photos**
   - Les photos apparaissent comme des items individuels dans la timeline.
   - L’icône de chaque élément correspond à l’image de la photo (via son URL).
   - Le titre affiché pour chaque photo est « New photo ».

3. **Maintien du comportement existant**
   - L’ordre chronologique de la timeline est respecté, intégrant les photos avec les lettres et cadeaux.
   - Cliquer sur une photo ouvre l’image complète dans un nouvel onglet ou permet son téléchargement.
   - Aucun impact sur les éléments existants de type `correspondence` ou `sponsorship_gift`.


![child picture](../images/child-picture.png)

### Résultat
- Les photos apparaissent correctement dans la timeline et sont triées par date.
- Chaque photo affiche son icône et le titre « New photo ».
- Les fonctionnalités existantes pour les lettres et cadeaux restent intactes.