<template>
    <div class="content-container">
        <NuxtLink class="link" to="/">About</NuxtLink>
    </div>
</template>

<style scoped>
.content-container {
    max-width: 1280px;
    margin: auto;

    display: flex;
    flex-direction: row;
    height: 60px;
}

.link {
    text-decoration: none;
    color: var(--defaultTextColor);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
}

.link:hover {
    color: var(--hoverDefaultTextColor);
}
</style>
