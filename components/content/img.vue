<template>
    <div>
        <img
            :src="getImageSrc(src)"
            :width="width"
            :height="height">
    </div>
</template>

<script>
import {getImageSrc} from '~/utilities/images.js';

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
        getImageSrc,
    },
};
</script>
