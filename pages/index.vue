<template>
    <div id="about-page">
        <section>
            <div class="content-container">
                <h1 class="text-center">Ryan Sheppard</h1>
                <p class="text-center">I'm a highly motivated software developer who understands collaboration. <b>I'm not afraid to speak my mind when I'm subject to something that could be done better</b>.</p>
            </div>
        </section>
        <section class="slanted-section">
            <div class="content-container">
                <h1 class="white text-center">My Stack</h1>
                <AboutTechStackImages />
            </div>
        </section>
        <section>
            <div id="about-section" class="content-container">
                <div>
                    <h3>Start building a dev team that fights about the health of your codebase</h3>
                    <p>I'm quick to install and easy to get started</p>
                </div>
                <div>
                    <AboutGetStartedButton />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
</script>

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

h1 {
    font-size: 3em;
    font-weight: 900;
    color: var(--importantTextColor);
    margin: 0;
}

h3 {
    font-size: 2em;
    font-weight: 900;
    color: var(--importantTextColor);
    margin: 0;
}

p {
    font-size: 1.25em;
    font-weight: 300;
    margin: 0;
}

.text-center {
    text-align: center;
}

b {
    font-weight: 700;
}

.white {
    color: white;
}
</style>
