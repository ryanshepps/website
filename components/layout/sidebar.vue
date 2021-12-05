<template>
    <div id="sidebar">
        <div id="sidebar-content">
            <LayoutSidebarTitledropdown />
            <NuxtLink 
                class="sidebar-link"
                to="/documentation">
                Introduction
            </NuxtLink>
        </div>
    </div>
</template>

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

.sidebar-link-dropdown {
    color: white; 
}
</style>
