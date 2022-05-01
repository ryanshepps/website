<template>
    <div id="sidebar">
        <div id="sidebar-content">
            <LayoutSidebarTitle 
                v-for="article in rootArticles"
                :key="article.title"
                :title="article.title"
                :href="getArticleLink(article.path)" />
            <LayoutSidebarTitledropdown
                v-for="folder in folders"
                :key="folder"
                :folder-name="folder" />
        </div>
    </div>
</template>

<script>
import { getArticleLink } from '../../utilities/documentation.js';

export default {
    computed: {
        folders() {
            return this.$store.getters.documentationFolders;
        },

        rootArticles() {
            return this.$store.getters.rootArticles;
        },
    },

    methods: {
        getArticleLink: function(articlePath) {
            return getArticleLink(articlePath);
        },
    },
};
</script>

<style scoped>
#sidebar {
    padding-top: var(--headerHeight);
    
    position: fixed;
    height: 100%;
    width: calc((100% - var(--defaultViewWidth)) / 2);
    
    background-color: var(--defaultBackgroundColor);
    border-right: solid 1px #EAEAEA;
}

#sidebar-content {
    height: 100%;
    margin: 8%;
}
</style>
