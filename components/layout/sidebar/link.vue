<template>
    <NuxtLink
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
}
</script>
