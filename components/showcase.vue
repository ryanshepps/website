<template>
    <NuxtLink
        class="showcase"
        :to="link">
        <img :src="getImageSrc(imgSrc)">
        <h4 class="text-center">
            {{ title }}
        </h4>
        <p class="text-center">
            {{ shortDescription }}
        </p>
        <div class="stack-container">
            <slot />
        </div>
    </NuxtLink>
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

        shortDescription: {
            type: String,
            required: true,
        },

        link: {
            type: String,
            default: '/405',
        },
    },

    methods: {
        getImageSrc,
    },
};
</script>

<style>
.stack-container > img {
    width: 35px;
}
</style>

<style scoped>
.showcase {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    border-radius: 5%;
    width: 30%;
    height: 400px;

    margin: auto; /* Ensures that a singular showcase gets centered within it's container */
}

img {
    height: 150px;
    width: 100%;
    object-fit: cover;
    z-index: -1;
}

h4 {
    color: black;
    padding-top: 10px;
}

p {
    padding: 20px 0;    
}

a {
    text-decoration: none;
}

a:visited {
    color: black;
}
</style>
