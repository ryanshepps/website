<template>
    <div id="documentation-page">
        <div id="sidebar">
            <NuxtLink 
                class="sidebar-link"
                to="/documentation">
                Introduction
            </NuxtLink>
        </div>

        <div class="content-container">
            <h1>Introduction</h1>
            <p>I'm a software developer with an interest in philosophy.</p>
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
</style>

