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
            let folderName = getFolderNameFromPath(article.path);
            folderName = capitalize(folderName);
            if (!exists(documentationFolders, folderName)) {
                documentationFolders.push(folderName);
            }
        });

        return documentationFolders;
    },
};

export const mutations = {
    initDocumentation(state, documentationContent) {
        state.documentation = documentationContent;
    },
}

export const actions = {
    async nuxtServerInit(context, {$content}) {
        const documentationContent = await $content('/', {deep: true}).only(['title']).fetch();
        context.commit('initDocumentation', documentationContent);
    },
};

