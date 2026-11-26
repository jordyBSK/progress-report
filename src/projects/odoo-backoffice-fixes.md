# Corrections et évolutions du back-office Odoo <Badge type="tip" text="Odoo / Python" />

- **Technologies :** Python, Odoo, XML, GitHub Actions, pre-commit
- **Tickets :** #2376, #2366, #2386, #2436, #2421
- **Date de réalisation :** 09.2024 – 08.2025
- **Durée :** [À compléter]
- **Lieu de réalisation :** Compassion Suisse, Rue Galilée 3, 1400 Yverdon-les-Bains
- **Note :** [À compléter]
- **Compétences opérationnelles acquises :** b2, d1, g5, h3, h4

## Description
Cette page regroupe plusieurs tickets plus courts traités dans le back-office Odoo et ses plateformes. Ce sont mes premières tâches dans le code de Compassion : elles m'ont permis de comprendre les modèles, les vues XML et le processus de revue du code.

### Réparation de la CI pre-commit (#2376, 09.2024)
L'action GitHub qui lance les vérifications **pre-commit** (formatage, linters) échouait. Je l'ai réparée pour que chaque pull request soit à nouveau vérifiée automatiquement.

### Colonne « Invoice Date » dans les factures du partenaire (#2366, 09.2024)
Ajout de la colonne `invoice_date` dans la vue liste des factures d'un partenaire, pour que les collaborateurs voient la date de facturation sans ouvrir chaque facture.

### Plateforme de traduction : template parasite (#2386, 09.2024)
Lorsqu'on répondait au commentaire d'un traducteur, un template indésirable était ajouté au message. Je l'ai retiré.

### Inscriptions Muskathlon : plusieurs employés notifiés (#2436, 10.2024)
Le champ qui définissait l'employé notifié d'une nouvelle inscription au Muskathlon était un `many2one` (un seul employé). Je l'ai transformé en `many2many` pour pouvoir en notifier plusieurs, en adaptant la vue et la logique d'envoi.

### Groupe de contrats avec plusieurs enfants (#2421, 08.2025)
Modifier le champ `advance_billing_month` d'un groupe de contrats contenant plusieurs enfants provoquait une erreur (traceback). J'ai analysé la trace, trouvé la cause et corrigé le calcul pour qu'il fonctionne avec plusieurs contrats.

**Résultat :**
- La CI vérifie de nouveau le code de chaque pull request.
- Plusieurs vues et notifications plus pratiques pour les équipes métier.
- Une erreur bloquante sur la facturation corrigée.
