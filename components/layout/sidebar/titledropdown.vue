<template> 
    <div
        id="sidebar-title-dropdown"
        @click="toggle()">
        <LayoutSidebarTitle />
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
#sidebar-title-dropdown {
    cursor: pointer;
}

.arrow {
    width: 0.8em;
    height: 0.6em;
}

.arrowclosed {
    transform: rotate(-90deg);
}
</style>

