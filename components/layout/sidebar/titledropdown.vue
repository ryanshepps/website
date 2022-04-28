<template> 
    <div id="sidebar-title-dropdown">
        <div @click="toggle()">
            <LayoutSidebarTitle :title="formatFolderName(folderName)" />
        </div>
        <div :class="[{ 'hidden': closed }]">
            <TouchableHighlight
                v-for="article in articles"
                :key="article.path">
                <LayoutSidebarLink 
                    :to="getArticleLink(article.path)"
                    :text="article.title" />
            </TouchableHighlight>
        </div>
    </div>
</template>

<script>
import { getArticleLink, formatFolderName } from '../../../utilities/documentation.js';

export default {
    props: {
        folderName: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            closed: true,
        };
    },

    computed: {
        articles() {
            return this.$store.getters.articlesInFolder(this.folderName);
        },
    },

    methods: {
        toggle: function() {
            this.closed = !this.closed;
        },

        getArticleLink: function(articlePath) {
            return getArticleLink(articlePath);
        },

        formatFolderName: function(folderName) {
            return formatFolderName(folderName);
        },
    },
};
</script>

<style scoped>
#sidebar-title-dropdown {
    cursor: pointer;
}

.hidden {
    display: none;
}
</style>

