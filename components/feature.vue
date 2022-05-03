<template>
    <div class="feature">
        <img :src="getImageSrc(imgSrc)">
        <h4 class="white-text text-center">
            {{ headingText }}
        </h4>
        <p class="white-text text-center">
            {{ subText }}
        </p>
    </div>
</template>

<script>
import {getImageSrc} from '~/utilities/images.js';

export default {
    props: {
        imgSrc: {
            type: String,
            required: true,
        },

        headingText: {
            type: String,
            required: true,
        },

        subText: {
            type: String,
            required: true,
        },
    },

    methods: {
        getImageSrc,
    },
};
</script>

<style scoped>
.feature {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 28%;
}

img {
    width: 20%;

    padding: 20px 0;
}

h4 {
    margin: 5px 0;
}
</style>
