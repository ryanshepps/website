<template>
    <div class="touchable-highlight">
        <a :href="href" :target="target">
            <slot></slot>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: "/",
        },
        newTab: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        target() {
            return this.newTab ? "_blank" : "";
        }
    },
}
</script>

<style scoped>
.touchable-highlight:hover {
    transition: filter 0.1s linear;
    filter: brightness(50%);
}
</style>

