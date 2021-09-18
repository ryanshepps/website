<template>
    <div id="about-page">
        <section>
            <div class="content-container">
                <h1>Ryan Sheppard</h1>
                <p>I'm a highly motivated software developer who understands collaboration. <b>I'm not afraid to speak my mind when I'm subject to something that could be done better</b>.</p>
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
}

h1 {
    font-size: 3em;
    font-weight: 900;
    text-align: center;
    color: var(--importantTextColor);
    margin: 0;
}

p {
    font-size: 1.25em;
    font-weight: 300;
    text-align: center;
    margin: 0;
}

b {
    font-weight: 700;
}
</style>
