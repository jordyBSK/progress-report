import {defineConfig} from 'vitepress'

// Will be displayed in left side bar and navigation
const links = [
    {text: 'Introduction', link: '/introduction'},
    {
        text: 'Languages', items: [
            {text: 'Python', link: '/languages/python'},
            {text: 'Rust', link: '/languages/rust'},
            {text: 'Html', link: '/languages/html'},
            {text: 'JavaScript', link: '/languages/javascript'},
            {text: 'Java', link: '/languages/java'},
            {text: 'PHP', link: '/languages/php'},
        ]
    },
    {
        text: 'Framework', items: [
            {text: 'Odoo', link: '/framework/odoo'},
            {text: 'React', link: '/framework/react'},
            {text: 'Twig', link: '/framework/twig'},
            {text: 'Slim', link: '/framework/slim'}
        ]
    },
    {
        text: 'Projects - Jobtrek', collapsed: true, items: [
            {text: 'Ecomaille', link: '/projects/ecomaille'},
            {text: 'Integration web', link: '/projects/integration-web'},
            {text: 'Rust todo list', link: '/projects/rust-todo'},
            {text: 'Site Static', link: '/projects/site-static'},
            {text: 'Java Tic-Tac-Toe', link: '/projects/java-tic-tac-toe'},
            {text: 'Grade calculator', link: '/projects/grade-calculator'},
            {text: 'Todo Login PHP', link: '/projects/todo-php'},
            {text: 'Blog PHP - Twig', link: '/projects/blog-php-twig'},
            {text: 'Climate Guardian', link: '/projects/climate-guardian'},
        ]
    },
    {
        text: 'Projects - Compassion', collapsed: true, items: [
            {text: 'Odoo back-office fixes', link: '/projects/odoo-backoffice-fixes'},
            {text: 'Show password', link: '/projects/show-password'},
            {text: 'Change icon on translation platform', link: '/projects/change-icon'},
            {text: 'Intern laptop setup', link: '/projects/Prepare-intern-computer'},
            {text: 'IT support and hardware', link: '/projects/it-support'},
            {text: 'Improve error on scan', link: '/projects/Improve-error-scan'},
            {text: 'Lost communications from backups', link: '/projects/backups-communication'},
            {text: 'Letter scanning fixes', link: '/projects/letter-import-fixes'},
            {text: 'Forget me (data protection)', link: '/projects/forget-me'},
            {text: 'Security issues in Odoo', link: '/projects/create-security-ticket'},
            {text: 'IDOR and XSS security fixes', link: '/projects/resolve-security-issues'},
            {text: 'Google Maps links for field offices', link: '/projects/add-google-maps-link'},
            {text: 'My Compassion letters page', link: '/projects/my-compassion-letters-page'},
            {text: 'Google Analytics Odoo', link: '/projects/google-analytics-odoo'},
            {text: 'Custom 404 page', link: '/projects/404-page'},
            {text: 'Child\'s pictures in Timeline', link: '/projects/child-picture'},
            {text: 'Odoo 18 migration', link: '/projects/odoo-18-migration'},
            {text: 'Gamification project management', link: '/projects/gamification-project'},
            {text: 'Translation data correction', link: '/projects/Correct-translation-data'},
            {text: 'Badge System', link: '/projects/Badges-gamification'},
        ]
    },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // Update your title and description with user name
    title: "My Progress Report",
    description: "The training report outlines all the skills acquired during the CFC of computer scientist applications development.",
    cleanUrls: true,
    lang: 'en',
    base: "/progress-report/",
    lastUpdated: true,

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            ...links,
            {text: 'How to', link: '/how-to-use'}
        ],

        outline: [2, 3],
        sidebar: [
            ...links,
            {
                text: 'Others',
                items: [
                    {text: 'How to use', link: '/how-to-use'}
                ]
            }
        ],

        search: {
            provider: 'local',
        },

        socialLinks: [
            // Replace link with yor own GitHub repo or github profile
            {icon: 'github', link: 'https://github.com/jordyBSK/progress-report'}
        ],

        editLink: {
            // Change first part of path to your repo name
            pattern: 'https://github.com/jordyBSK/progress-report/edit/main/src/:path',
            text: 'Edit this page on GitHub'
        }
    }
})
