<template>
    <div id="default-header">
        <div
            id="hamburger-container"
            :class="{'hide-hamburger': !showHamburger}"
            @click="toggleSidebar()">
            <TouchableHighlight
                class="touchable-highlight"
                @click="toggleSidebar">
                <img 
                    src="~/assets/img/sidebar/hamburger.jpg"
                    id="hamburger-img" />
            </TouchableHighlight>
        </div>
        <div class="content-container">
            <TouchableHighlight class="touchable-highlight">
                <NuxtLink
                    class="link"
                    to="/">
                    About
                </NuxtLink>
            </TouchableHighlight>
            <TouchableHighlight class="touchable-highlight">
                <NuxtLink
                    class="link"
                    to="/documentation">
                    Documentation
                </NuxtLink>
            </TouchableHighlight>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            showHamburger: this.$store.state.showHamburger,
        };
    },

    methods: {
        ...mapMutations({
            toggleSidebar: 'toggleSidebar',
        }),
    },
}
</script>

<style scoped>
.hide-hamburger {
    display: none;
}

#default-header {
    display: flex;
}

#hamburger-container {
    align-self: center;
    margin: 0 25px 0 25px;
}

#hamburger-img {
    width: 25px;
}

.content-container {
    display: flex;
    width: 100%;
    height: 60px;
}

.touchable-highlight {
    margin: 0 1%;
}

.link {
    text-decoration: none;
    color: var(--defaultTextColor);

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
}

.link:hover {
    color: var(--hoverDefaultTextColor);
}
</style>
