<template>
    <NuxtLink
        class="link"
        :to="to">
        {{ text }}
    </NuxtLink>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true,
        },

        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.link {
    color: var(--defaultTextColor);
    text-decoration: none;
    display: block;

    margin: 5px 0px 5px 5px;
}
</style>
