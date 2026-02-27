# Ajout d’un bouton pour afficher/masquer le mot de passe 21.10.2024


![React](../images/password-eye.png)

## Contexte
Sur les formulaires de création de compte et de connexion, les utilisateurs ne pouvaient pas visualiser ce qu’ils saisissaient dans le champ mot de passe.  
Cela peut entraîner des erreurs de saisie et une mauvaise expérience utilisateur.

## Objectif
Améliorer l’expérience utilisateur en permettant de visualiser temporairement le mot de passe saisi dans les formulaires de login et de signup, tout en conservant la sécurité du champ.

## Travaux effectués
1. **Ajout d’un bouton “œil”**
    - Un petit icône en forme d’œil a été ajouté à côté des champs mot de passe.
    - Lorsque l’utilisateur clique sur l’icône, le mot de passe saisi devient visible, puis peut être masqué à nouveau.

2. **Comportement sécurisé**
    - L’affichage du mot de passe ne modifie pas le champ de saisie ni ne stocke le mot de passe ailleurs.
    - L’icône respecte les bonnes pratiques UX pour ce type de fonctionnalité.

3. **Tests fonctionnels**
    - Vérification sur les formulaires de login et de signup que le bouton fonctionne correctement.
    - Tests effectués sur différents navigateurs et tailles d’écran pour garantir la compatibilité.

## Résultat
- Les utilisateurs peuvent désormais voir ce qu’ils ont saisi dans le champ mot de passe.
- La saisie est plus intuitive et les erreurs de frappe sont réduites.
- La sécurité des mots de passe est maintenue, et l’expérience utilisateur est améliorée.