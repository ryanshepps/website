import { capitalize } from '~/utilities/string.js';
import { getFolderNameFromPath } from '~/utilities/documentation.js';
import { exists } from '~/utilities/array.js';

export const state = () => ({
    showHamburger: false,
    sidebarOpen: true,
});

export const mutations = {
    initDocumentation(state, documentationContent) {
        state.documentation = documentationContent;
    },

    toggleSidebar(state) {
        state.sidebarOpen = !state.sidebarOpen;
    },
    
    showHamburger(state, showHamburger) {
        state.showHamburger = showHamburger;
    },
}

export const actions = {
    async nuxtServerInit(context, {$content}) {
        const documentationContent = await $content('/', {deep: true}).only(['title', 'path', 'dir']).fetch();
        context.commit('initDocumentation', documentationContent);
    },
};

