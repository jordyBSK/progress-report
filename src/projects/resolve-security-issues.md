# Correction de failles de sécurité IDOR et XSS

* **Technologies :** Python, Odoo, JavaScript, XML, OWL
* **Date de réalisation :** [À compléter]
* **Durée :** [À compléter]
* **Lieu de réalisation :** Compassion Suisse, Rue Galilée 3, 1400 Yverdon-les-Bains
* **Note :** [À compléter]
* **Compétences opérationnelles acquises :** [À compléter]

## Description

Dans le cadre de l'amélioration de la sécurité de l'application Odoo, plusieurs failles de sécurité ont été identifiées. J'ai notamment travaillé sur la correction de vulnérabilités de type **IDOR (Insecure Direct Object Reference)** et **XSS (Cross-Site Scripting)**.

L'objectif était de corriger ces vulnérabilités afin d'empêcher un utilisateur d'accéder à des données auxquelles il ne devrait pas avoir accès et de limiter les risques liés à l'injection de contenu malveillant dans l'application.

**Travaux effectués :**

1. **Analyse des failles IDOR :** J'ai analysé les tâches concernant les accès directs à des ressources afin de vérifier qu'un utilisateur ne puisse pas accéder ou modifier des données appartenant à un autre utilisateur en manipulant directement un identifiant.

2. **Correction des contrôles d'accès :** J'ai adapté le code afin que les droits d'accès soient correctement vérifiés avant de permettre l'accès à une ressource. Les contrôles ont été renforcés pour respecter les permissions définies dans Odoo.

3. **Analyse des failles XSS :** J'ai identifié les endroits où des données fournies par un utilisateur pouvaient être affichées dans l'application sans protection suffisante.

4. **Sécurisation des données affichées :** J'ai adapté le traitement et l'affichage des données afin d'empêcher l'exécution de code JavaScript injecté par un utilisateur.

5. **Tests des corrections :** Après les modifications, j'ai effectué différents tests afin de vérifier que les accès non autorisés étaient bloqués et que les contenus potentiellement malveillants n'étaient plus exécutés.

**Résultat :**

* Les vulnérabilités IDOR traitées ont été corrigées en renforçant les contrôles d'accès.
* Les risques liés aux failles XSS traitées ont été réduits grâce à une meilleure gestion des données utilisateur.
* Les fonctionnalités existantes restent accessibles aux utilisateurs disposant des autorisations nécessaires.
* Les corrections ont été testées afin de vérifier qu'elles n'introduisent pas de régression.
