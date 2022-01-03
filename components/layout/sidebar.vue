<template>
    <div id="sidebar">
        <div id="sidebar-content">
            <LayoutSidebarTitle 
                title="Introduction"
                href="/" />
            <LayoutSidebarTitledropdown
                v-for="folder in folders"
                :key="folder"
                :folderName="folder" />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        folders() {
            return this.$store.getters.documentationFolders;
        },
    },
}
</script>

<style scoped>
#sidebar {
    position: fixed;
    height: 100%;
    width: calc((100% - var(--defaultViewWidth)) / 2);
    
    background-color: var(--importantTextColor);
}

#sidebar-content {
    height: 100%;
    margin: 8%;
}
</style>
