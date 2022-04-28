import { exists } from '~/utilities/array.js';

export const state = () => ({
    documentation: [],
});

export const getters = {
    documentationFolders: (state) => {
        const documentationFolders = [];

        state.documentation.forEach((article) => {
            if (article.dir !== '/' && !exists(documentationFolders, article.dir)) {
                documentationFolders.push(article.dir);
            }
        });

        return documentationFolders;
    },

    articlesInFolder: (state) => (folderName) => {
        const articles = [];
        
        state.documentation.forEach((article) => {
            if (folderName === article.dir) {
                articles.push(article);
            }
        });

        return articles;
    },

    rootArticles: (state) => {
        const rootArticles = [];

        state.documentation.forEach((article) => {
            if (article.dir === '/') {
                rootArticles.push(article);
            }
        });

        return rootArticles;
    },
};

export const mutations = {
    initDocumentation(state, documentationContent) {
        state.documentation = documentationContent;
    },
};

export const actions = {
    async nuxtServerInit(context, {$content}) {
        const documentationContent = await $content('/', {deep: true}).only(['title', 'path', 'dir']).fetch();
        context.commit('initDocumentation', documentationContent);
    },
};

