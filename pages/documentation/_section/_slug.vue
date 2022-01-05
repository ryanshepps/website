<template>
    <div id="documentation-page">
        <div class="content-container article-container">
            <h1>{{ article.title }}</h1>
            <nuxt-content :document="article" />
        </div>
    </div>
</template>

<script>
export default {
    layout: 'sidebar',

    async asyncData({ $content, params }) {
        let article;

        if (!params.section && !params.slug) {
            article = await $content('introduction').fetch();
        } else {
            article = await $content(params.section, params.slug).fetch();
        }

        return { article };
    },
};
</script>

<style scoped>
.article-container {
    padding: 1% 0 0 5%;
}
</style>

