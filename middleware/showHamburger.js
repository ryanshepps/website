export default ({route, store}) => {
    if (route.path.includes('documentation')) {
        store.commit('showHamburger', true);
    } else {
        store.commit('showHamburger', false);
    }
};
