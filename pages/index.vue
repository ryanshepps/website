<template>
    <div id="about-page">
        <section>
            <div class="content-container">
                <h1 class="text-center">
                    Ryan Sheppard
                </h1>
                <p class="text-center">
                    I'm a highly motivated software developer who understands collaboration. <b>I'm not afraid to speak my mind when I'm subject to something that could be done better</b>.
                </p>
            </div>
        </section>
        <section class="slanted-section">
            <div class="content-container">
                <h1 class="white-text text-center">
                    My Stack
                </h1>
                <div id="tech-stack-images">
                    <TouchableHighlight 
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        new-tab>
                        <img src="~/assets/img/techstack/JavaScript.svg">
                    </TouchableHighlight>
                    <TouchableHighlight
                        href="https://reactnative.dev/"
                        new-tab>
                        <img src="~/assets/img/techstack/ReactNative.svg">
                    </TouchableHighlight>
                    <TouchableHighlight
                        href="https://vuejs.org/"
                        new-tab>
                        <img src="~/assets/img/techstack/Vue.svg">
                    </TouchableHighlight>
                    <TouchableHighlight
                        href="https://nuxtjs.org/"
                        new-tab>
                        <img src="~/assets/img/techstack/Nuxt.svg">
                    </TouchableHighlight>
                    <TouchableHighlight
                        href="https://www.amazon.ca/Programming-Language-2nd-Brian-Kernighan/dp/0131103628/ref=sr_1_1?dchild=1&keywords=c+programming+language&qid=1632006279&sr=8-1"
                        new-tab>
                        <img src="~/assets/img/techstack/C.svg">
                    </TouchableHighlight>
                </div>
            </div>
        </section>
        <section>
            <div
                id="about-section"
                class="content-container">
                <div>
                    <h3>Start building a dev team that fights for the health of your codebase</h3>
                    <p>I'm quick to install and easy to get started</p>
                </div>
                <TouchableHighlight href="mailto: ryansheppardd@gmail.com">
                    <p class="get-started-btn">
                        Get Started
                    </p>
                </TouchableHighlight>
            </div>
        </section>
    </div>
</template>

<style scoped>
#about-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

section {
    width: 60%;
    height: 80vh;
    display: flex;
    position: relative;
}

#about-section {
    display: flex;
    justify-content: center;
    align-items: center;
}

.slanted-section {
    width: 100%;
}

.slanted-section::before {
    content: '';
    position: absolute;
    transform: skewY(-3deg) translateY(0.75em);
    background-color: var(--importantTextColor);
    width: 100%;
    height: 100%;
    z-index: -1;
}

#tech-stack-images {
    margin: 10px;
    display: flex;
}

img {
    margin: 0px 10px;
    width: 70%;
}

.get-started-btn {
    color: var(--importantTextColor);
    background-color: var(--secondaryColor);
    
    font-weight: 900;
    text-decoration: none;

    border: 4px var(--importantTextColor) solid;
    border-radius: 8px;
    padding: 10px 20px;
    margin: 10px;

    white-space: nowrap;
}
</style>

