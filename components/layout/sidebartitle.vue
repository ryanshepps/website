<template> 
    <div
        id="sidebar-title"
        @click="toggle()">
        <a class="title">
            Philosophy
        </a>
        <img 
            class="arrow"
            :class="{ arrowclosed: closed }"
            src="~/assets/img/arrow.png">
    </div>
</template>

<script>
export default {
    data() {
        return {
            closed: true,
        };
    },

    methods: {
        toggle: function() {
            this.closed = !this.closed;
        },
    },
};
</script>

<style scoped>
#sidebar-title {
    cursor: pointer;
}

.title {
    display: inline-block;
    color: white;
    font-weight: bold;
}

.arrow {
    width: 0.8em;
    height: 0.6em;
}

.arrowclosed {
    transform: rotate(-90deg);
}
</style>

