<template>
    <div>
        <img
            :src="getSrc()"
            :width="width"
            :height="height">
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },

        width: {
            type: [String, Number],
            default: 'auto',
        },

        height: {
            type: [String, Number],
            default: 'auto',
        },
    },

    methods: {
        getSrc() {
            return require(`~/assets/img/${this.src}`);
        },
    },
};
</script>
