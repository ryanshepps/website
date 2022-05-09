<template>
    <footer>
        <div class="content-container">
            <div class="row">
                <div class="column">
                    <p class="title">
                        <b>Contact</b>
                    </p>
                    <a
                        href="mailto:ryansheppardd@gmail.com"
                        target="_blank">
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ryansheppardd/"
                        target="_blank">
                        LinkedIn
                    </a>
                </div>
                <div class="column">
                    <p class="title">
                        <b>Social Media</b>
                    </p>
                    <a
                        href="https://twitter.com/ryannsheppardd"
                        target="_blank">
                        Twitter
                    </a>
                    <a
                        href="https://www.instagram.com/ryannsheppardd/"
                        target="_blank">
                        Instagram
                    </a>
                </div>
                <div class="column">
                    <p class="title">
                        <b>Other Links</b>
                    </p>
                    <a
                        href="https://github.com/ryanshepps"
                        target="_blank">
                        GitHub
                    </a>
                    <a
                        href="https://devpost.com/ryanshepps"
                        target="_blank">
                        DevPost
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--importantTextColor);
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: space-between;

    padding: 60px 0;
}

.column {
    display: flex;
    flex-direction: column;
}

.column > * {
    padding: 5px;
}

p {
    color: white;
}

a {
    color: white;
    text-decoration: none;
}
</style>
