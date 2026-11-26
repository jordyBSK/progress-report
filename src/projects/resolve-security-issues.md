# Correction de failles de sécurité IDOR, XSS et énumération d'utilisateurs

* **Technologies :** Python, Odoo, JavaScript, XML, OWL
* **Tickets :** #2707, #2713, #2714, #2716, #2717, #2718, #2726, #2737
* **Date de réalisation :** 02.2025 – 03.2025
* **Durée :** [À compléter]
* **Lieu de réalisation :** Compassion Suisse, Rue Galilée 3, 1400 Yverdon-les-Bains
* **Note :** [À compléter]
* **Compétences opérationnelles acquises :** c3, g3, g5, g6

## Description

À la suite de l'audit de sécurité et de la [création des tickets](./create-security-ticket.md), plusieurs failles ont été identifiées, principalement dans les plateformes de crowdfunding et MyCompassion. J'ai notamment travaillé sur la correction de vulnérabilités de type **IDOR (Insecure Direct Object Reference)** et **XSS (Cross-Site Scripting)**.

L'objectif était de corriger ces vulnérabilités afin d'empêcher un utilisateur d'accéder à des données auxquelles il ne devrait pas avoir accès et de limiter les risques liés à l'injection de contenu malveillant dans l'application.

**Failles corrigées :**

| Ticket | Type | Problème |
|---|---|---|
| #2707 | IDOR | Des permissions trop larges permettaient de voir et modifier n'importe quel événement (« mes » événements). |
| #2713 | IDOR | N'importe quel utilisateur connecté pouvait voir et modifier n'importe quel `crowdfunding.project`. |
| #2714 | IDOR | En changeant l'ID dans l'URL, on pouvait modifier le profil de n'importe quel `crowdfunding.participant`. |
| #2716 | XSS stockée | Code malveillant possible dans la description d'un projet de crowdfunding. |
| #2717 | XSS stockée | Code malveillant possible dans le champ `personal_motivation` d'un participant. |
| #2718 | XSS stockée | Code malveillant possible dans le « prénom préféré » de l'enfant parrainé. |
| #2726 | XSS réfléchie | Le paramètre `action_done` de l'URL de la page de remerciement exécutait du code. |
| #2737 | Énumération d'utilisateurs | À l'inscription, le message d'erreur révélait qu'un email avait déjà un compte. |

**Travaux effectués :**

1. **Analyse des failles IDOR :** J'ai analysé les tâches concernant les accès directs à des ressources afin de vérifier qu'un utilisateur ne puisse pas accéder ou modifier des données appartenant à un autre utilisateur en manipulant directement un identifiant.

2. **Correction des contrôles d'accès :** J'ai adapté le code afin que les droits d'accès soient correctement vérifiés avant de permettre l'accès à une ressource. Les contrôles ont été renforcés pour respecter les permissions définies dans Odoo.

3. **Analyse des failles XSS :** J'ai identifié les endroits où des données fournies par un utilisateur pouvaient être affichées dans l'application sans protection suffisante.

4. **Sécurisation des données affichées :** J'ai adapté le traitement et l'affichage des données afin d'empêcher l'exécution de code JavaScript injecté par un utilisateur.

5. **Énumération d'utilisateurs :** J'ai remplacé le message d'erreur de l'inscription par un message neutre, qui ne permet plus de savoir si une adresse email est déjà enregistrée.

6. **Tests des corrections :** Après les modifications, j'ai effectué différents tests afin de vérifier que les accès non autorisés étaient bloqués et que les contenus potentiellement malveillants n'étaient plus exécutés.

**Résultat :**

* Les vulnérabilités IDOR traitées ont été corrigées en renforçant les contrôles d'accès.
* Les risques liés aux failles XSS traitées ont été réduits grâce à une meilleure gestion des données utilisateur.
* Il n'est plus possible de savoir si un email possède un compte depuis le formulaire d'inscription.
* Les fonctionnalités existantes restent accessibles aux utilisateurs disposant des autorisations nécessaires.
* Les corrections ont été testées afin de vérifier qu'elles n'introduisent pas de régression.
