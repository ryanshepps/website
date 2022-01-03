<template>
    <div id="documentation-page">
        <div class="content-container">
            <h1>{{ article.title }}</h1>
            <nuxt-content :document="article" />
        </div>
    </div>
</template>

<script>
export default {
    layout: 'sidebar',

    async asyncData({ $content, params }) {
        const article = await $content(params.section, params.slug).fetch()
        return { article };
    },
};
</script>

