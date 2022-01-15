<template>
    <TouchableHighlight>
        <NuxtLink
            class="title"
            :to="href">
            {{ title }}
        </NuxtLink>
    </TouchableHighlight>
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
    color: var(--defaultTextColor);
    text-decoration: none;
    margin: 5px 0;
}
</style>
