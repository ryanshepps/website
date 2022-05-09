<template>
    <div id="index-page">

        <!-- Intro Section -->
        <section class="content-container">
            <h1 class="text-center">
                Ryan Sheppard
            </h1>
            <p class="text-center">
                The human compatible framework helping to build great teams everywhere
            </p>
        </section>

        <!-- Features Section -->
        <section id="features-section">
            <div class="content-container">
                <h1
                    id="features-title"
                    class="white-text text-center">
                    Features
                </h1>
                <div id="features-container">
                    <Feature
                        img-src="features/leader.svg"
                        heading-text="Leader"
                        sub-text="I'm dedicated to the performance of my team." />
                    <Feature
                        img-src="features/teachable.svg"
                        heading-text="Teachable"
                        sub-text="I'm always open to suggestions and take criticism constructively." />
                    <Feature
                        img-src="features/communicative.svg"
                        heading-text="Communicative"
                        sub-text="I'm good at communicating with non-technical shareholders and teammates." />
                    <Feature
                        img-src="features/quicklearner.svg"
                        heading-text="Quick Learner"
                        sub-text="I've spent lots of time learning how to learn." />
                    <Feature
                        img-src="features/adaptable.svg"
                        heading-text="Adaptable"
                        sub-text="I'm used to quickly switching contexts. I've manages multiple projects at once." />
                    <Feature
                        img-src="features/resilient.svg"
                        heading-text="Resilient"
                        sub-text="I fail a lot. But failure makes me learn faster." />
                </div>
            </div>
        </section>

        <!-- Showcase Section -->
        <section id="showcase-section">
            <h1
                id="showcase-title"
                class="text-center">
                Showcase
            </h1>
            <p class="text-center">
                Check out some other personal projects powered by me <NuxtLink to="/405">here</NuxtLink>
            </p>
            <div
                id="showcases"
                class="content-container">
                <Showcase
                    img-src="showcase/personal-website.png"
                    title="Personal Website"
                    short-description="I'm most proud of this website. It's taken me a lot of work to get it to where I want. Luckily, it's here! Welcome.">
                    <img :src="getImageSrc('showcase/stack/nuxt.svg')">
                    <img :src="getImageSrc('showcase/stack/vue.svg')">
                    <img :src="getImageSrc('showcase/stack/google-cloud.svg')">
                </Showcase>
            </div>
        </section>

        <!-- Get Started Section -->
        <section id="get-started-section">
            <img
                id="get-started-bg-bubbles"
                :src="getImageSrc('get-started/bubbles.svg')">
            <div id="get-started-bg">
                <div class="content-container">
                    <h1
                        id="get-started-title"
                        class="white-text text-center">
                        Get Started
                    </h1>
                    <GetStartedAction
                        img-src="get-started/installation.svg"
                        title="Installation">
                        Visit my
                        <NuxtLink
                            class="white-text"
                            to="/405">
                            installation page
                        </NuxtLink>
                        for more information on how you can get me started in your team.
                    </GetStartedAction>
                    <GetStartedAction
                        img-src="get-started/documentation.svg"
                        title="Documentation">
                        Looking to get to know me more? Check out my 
                        <NuxtLink
                            class="white-text"
                            to="/documentation">
                            documentation.
                        </NuxtLink>
                    </GetStartedAction>
                    <GetStartedAction
                        img-src="get-started/contact.svg"
                        title="Contact">
                        I'm always down to chat. Let's grab a coffee some time! You can shoot me an email 
                        <a
                            class="white-text"
                            href="mailto:ryansheppardd@gmail.com">
                            here.
                        </a>
                    </GetStartedAction>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {getImageSrc} from '~/utilities/images.js';

export default {
    methods: {
        getImageSrc,
    },
};
</script>

<style scoped>
#index-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

section {
    position: relative;
    width: 60%;
    height: 80vh;

    display: flex;
    justify-content: center;
    flex-direction: column;
}

#features-section {
    width: 100%;
    height: 900px;
}

#features-section::before {
    content: '';
    position: absolute;
    transform: skewY(-3deg) translateY(0.75em);
    background-color: var(--importantTextColor);
    width: 100%;
    height: 100%;
    z-index: -1;
}

#features-title {
    padding-bottom: 25px;
}

#features-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    width: 100%;
    height: 500px;
}

#showcase-title, #get-started-title {
    padding-top: 100px;
}

#showcases {
    display: flex;
    justify-content: space-between;
}

a {
    font-weight: bold;
}

#get-started-section {
    width: 100%;
    justify-content: flex-start;
}

#get-started-bg-bubbles {
    width: 100%;
    max-width: var(--defaultViewWidth);
    margin: 0 auto -3px auto;
}

#get-started-bg {
    background-color: var(--importantTextColor);
    width: 100%;
}

#get-started-section .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 700px;
}
</style>

