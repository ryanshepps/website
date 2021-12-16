<template> 
    <div
        id="sidebar-title-dropdown"
        @click="toggle()">
        <LayoutSidebarTitle :title="title" />
    </div>
</template>

<script>
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
    },
};
</script>

<style scoped>
#sidebar-title-dropdown {
    cursor: pointer;
}
</style>

