export const state = () => ({
    documentation: [],
});

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

