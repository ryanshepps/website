<template> 
    <div
        id="sidebar-title-dropdown"
        @click="toggle()">
        <LayoutSidebarTitle :title="formatFolderName(folderName)" />
        <div :class="[{ 'hidden': closed }]">
            <LayoutSidebarLink 
                v-for="article in articles"
                :key="article.path"
                :to="getArticleLink(article.path)"
                :text="article.title"
                />
        </div>
    </div>
</template>

<script>
import { getArticleLink } from '../../../utilities/documentation.js';
import { capitalize } from '../../../utilities/string.js';

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
            return capitalize(folderName.split('/')[1]);
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

