export default {
    modules: [
        '@nuxt/content',
    ],
    content: {
        dir: 'content',
        liveEdit: false,
    },
    components: true,
    css: [
        '@/assets/css/default.css',
        '@/assets/css/theme.css',
        '@/assets/css/fonts.css',
        '@/assets/css/content.css',
    ],
    head: {
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        ],
    },
};
