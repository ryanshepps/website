import { capitalize } from '~/utilities/string.js';
import { getFolderNameFromPath } from '~/utilities/documentation.js';
import { exists } from '~/utilities/array.js';

export const state = () => ({
    documentation: [],
});

export const getters = {
    documentationFolders: (state, getters) => {
        const documentationFolders = [];

        state.documentation.forEach((article) => {
            if (article.dir !== '/' && !exists(documentationFolders, article.dir)) {
                documentationFolders.push(article.dir);
            }
        });

        return documentationFolders;
    },

    articles: (state, getters) => (folderName) => {
        const articles = [];
        
        state.documentation.forEach((article) => {
            let curArticleFolderName = getFolderNameFromPath(article.path);
            curArticleFolderName = capitalize(curArticleFolderName);
            console.log(folderName, curArticleFolderName);
            if (folderName === curArticleFolderName) {
                articles.push(article);
            }
        });

        return articles;
    },
};

export const mutations = {
    initDocumentation(state, documentationContent) {
        state.documentation = documentationContent;
    },
}

export const actions = {
    async nuxtServerInit(context, {$content}) {
        const documentationContent = await $content('/', {deep: true}).only(['title', 'path', 'dir']).fetch();
        context.commit('initDocumentation', documentationContent);
    },
};

