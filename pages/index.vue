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
        <section>
            <div
                id="about-section"
                class="content-container third-section">
                <div class="text-container">
                    <h3>Start building a team that does things right</h3>
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

#about-section {
    display: flex;
    justify-content: center;
    align-items: center;
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

.third-section .text-container {
    margin-right: 40px;
}
</style>

