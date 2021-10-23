<template>
    <div class="touchable-highlight">
        <slot></slot>
    </div>
</template>

<style scoped>
.touchable-highlight:hover {
    transition: filter 0.1s linear;
    filter: brightness(50%);
}
</style>

