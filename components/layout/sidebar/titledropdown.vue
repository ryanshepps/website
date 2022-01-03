<template> 
    <div
        id="sidebar-title-dropdown"
        @click="toggle()">
        <LayoutSidebarTitle :title="title" />
        <LayoutSidebarLink 
            v-for="article in articles"
            :key="article.path"
            :to="getArticleLink(article.path)"
            :text="article.title"
            />
    </div>
</template>

<script>
import { articleLinkPrefix } from '../../../utilities/documentation.js';

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            closed: true,
            folderName: this.title,
        };
    },

    computed: {
        articles() {
            const articles = this.$store.getters.articles(this.folderName);
            return articles;
        },
    },

    methods: {
        toggle: function() {
            this.closed = !this.closed;
        },

        getArticleLink: function(articlePath) {
            console.log('returning this', articleLinkPrefix + articlePath);
            return articleLinkPrefix + articlePath;
        },
    },
};
</script>

<style scoped>
#sidebar-title-dropdown {
    cursor: pointer;
}
</style>

