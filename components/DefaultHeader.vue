<template>
    <div class="content-container">
        <TouchableHighlight class="touchable-highlight">
            <NuxtLink
                class="link"
                to="/">
                About
            </NuxtLink>
        </TouchableHighlight>
        <TouchableHighlight class="touchable-highlight">
            <NuxtLink
                class="link"
                to="/documentation">
                Documentation
            </NuxtLink>
        </TouchableHighlight>
    </div>
</template>

<style scoped>
.content-container {
    display: flex;
    height: 60px;
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

.link:hover {
    color: var(--hoverDefaultTextColor);
}
</style>
