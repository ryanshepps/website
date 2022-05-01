<template>
    <div id="header">
        <div id="header-content">
            <TouchableHighlight class="touchable-highlight">
                <NuxtLink
                    class="link header-icon"
                    to="/">
                    Ryan Sheppard
                </NuxtLink>
            </TouchableHighlight>
            <TouchableHighlight class="touchable-highlight">
                <NuxtLink
                    class="link"
                    to="/405">
                    Showcase
                </NuxtLink>
            </TouchableHighlight>
            <TouchableHighlight class="touchable-highlight">
                <NuxtLink
                    class="link"
                    to="/documentation">
                    Documentation
                </NuxtLink>
            </TouchableHighlight>
            <TouchableHighlight class="touchable-highlight">
                <NuxtLink
                    class="link"
                    to="/405">
                    Installation
                </NuxtLink>
            </TouchableHighlight>
        </div>
    </div>
</template>

<style scoped>
#header {
    height: var(--headerHeight);
    position: fixed;
    width: 100vw;
    z-index: 2;

    background-color: #FFFFFF;
}

#header-content {
    display: flex;
    justify-content: center;
    height: 100%;
}

.touchable-highlight {
    margin: 0 1%;
}

.link {
    text-decoration: none;
    color: var(--defaultTextColor);

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
}

.header-icon {
    color: var(--importantTextColor);
    font-size: 1.25em;
    font-weight: bold;
}

.link:hover {
    color: var(--hoverDefaultTextColor);
}
</style>
