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
            {text: 'google analytics odoo', link: '/projects/my-compassion-letters-page'},
            {text: 'google analytics odoo', link: '/projects/google-analytics-odoo'},
            {text: 'Rust todo list', link: '/projects/rust-todo'},
            {text: 'Java Tic-Tac-Toe', link: '/projects/java-tic-tac-toe'},
            {text: 'Site Static', link: '/projects/site-static'},
            {text: 'integration web', link: '/projects/integration-web'},
            {text: 'Grade calculator', link: '/projects/grade-calculator'},
            {text: 'Ecomaille', link: '/projects/ecomaille'},
            {text: 'Todo Login PHP', link: '/projects/todo-php'},
            {text: 'Blog PHP - Twig', link: '/projects/blog-php-twig'},
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
