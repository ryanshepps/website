<template>
    <NuxtLink
        class="title"
        :to="href">
        {{ title }}
    </NuxtLink>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: '#',
        },

        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.title {
    display: inline-block;
    color: white;
    font-weight: bold;
}
</style>
