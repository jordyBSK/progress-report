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
        text: 'Projects', items: [
            {text: 'Ecomaille', link: '/projects/ecomaille'},
            {text: 'Site Static', link: '/projects/site-static'},
            {text: 'Rust todo list', link: '/projects/rust-todo'},
            {text: 'Grade calculator', link: '/projects/grade-calculator'},
            {text: 'Todo Login PHP', link: '/projects/todo-php'},
            {text: 'custom 404 page', link: '/projects/404-page'},
            {text: 'Child\'s pictures in Timeline', link: '/projects/child-picture'},
            {text: 'Show password', link: '/projects/show-password'},
            {text: 'improve error on scan', link: '/projects/Improve-error-scan'},
            {text: 'Change icon on translation platform', link: '/projects/change-icon'},
            {text: 'Java Tic-Tac-Toe', link: '/projects/java-tic-tac-toe'},
            {text: 'integration web', link: '/projects/integration-web'},
            {text: 'Blog PHP - Twig', link: '/projects/blog-php-twig'},
            {text: 'google analytics odoo', link: '/projects/google-analytics-odoo'},
            {text: 'my compassion letters page', link: '/projects/my-compassion-letters-page'},
            {text: 'Security issues in Odoo', link: '/projects/security-issues'},
            {text: 'IDOR and XSS security fixes', link: '/projects/security-idor-xss'},
            {text: 'Badge System', link: '/projects/badge-system'},
            {text: 'Google Maps links for field offices', link: '/projects/google-maps-field-offices'},
            {text: 'Intern laptop setup', link: '/projects/intern-laptop'},
            {text: 'TOGETHER platform and thank you emails', link: '/projects/together-platform'},
            {text: 'Translation data correction', link: '/projects/translation-data-correction'},
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
