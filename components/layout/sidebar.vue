<template>
    <div
        id="sidebar"
        :class="{hide: !sidebarOpen}">
        <div id="sidebar-content">
            <LayoutSidebarTitle 
                v-for="article in rootArticles"
                :key="article.title"
                :title="article.title"
                :href="getArticleLink(article.path)" />
            <LayoutSidebarTitledropdown
                v-for="folder in folders"
                :key="folder"
                :folderName="folder" />
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { getArticleLink } from '../../utilities/documentation.js';

export default {
    computed: {
        ...mapState({
            sidebarOpen: state => state.sidebarOpen,
        }),

        ...mapGetters({
            rootArticles: 'documentation/rootArticles',
            folders: 'documentation/documentationFolders',
        }),
    },

    methods: {
        getArticleLink: function(articlePath) {
            return getArticleLink(articlePath);
        },
    },
}
</script>

<style scoped>
#sidebar {
    position: fixed;
    height: 100%;
    width: 300px;
    resize: none;
    background-color: var(--defaultBackgroundColor);
}

.hide {
    display: none;
}

#sidebar-content {
    height: 100%;
    margin: 8%;
}
</style>
