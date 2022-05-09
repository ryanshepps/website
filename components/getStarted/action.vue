<template>
    <div class="get-started-action">
        <img :src="getImageSrc(imgSrc)">
        <div class="text">
            <h3 class="white-text">
                {{ title }}
            </h3>
            <p class="white-text">
                <slot />
            </p>
        </div>
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

        title: {
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
.get-started-action {
    display: flex;
    width: 80%;
    height: 150px;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    height: 100%;
}

img {
    margin: 20px;
}
</style>
