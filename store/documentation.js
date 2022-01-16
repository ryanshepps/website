import { capitalize } from '~/utilities/string.js';
import { getFolderNameFromPath } from '~/utilities/documentation.js';
import { exists } from '~/utilities/array.js';

export const state = () => ([]);

export const getters = {
    documentationFolders: (state, getters) => {
        const documentationFolders = [];

        state.forEach((article) => {
            if (article.dir !== '/' && !exists(documentationFolders, article.dir)) {
                documentationFolders.push(article.dir);
            }
        });

        return documentationFolders;
    },

    articlesInFolder: (state, getters) => (folderName) => {
        const articles = [];
        
        state.forEach((article) => {
            if (folderName === article.dir) {
                articles.push(article);
            }
        });

        return articles;
    },

    rootArticles: (state, getters) => {
        const rootArticles = [];

        state.forEach((article) => {
            if (article.dir === '/') {
                rootArticles.push(article);
            }
        });

        return rootArticles;
    },
};
