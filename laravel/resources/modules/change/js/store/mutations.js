const mutations = {
    setFoo (state, value) {
        state.foo = value;
    },
    selectNode (state, value) {
        state.selectedNode = value;
    },
    toggleButtonNewChange (state, value) {
        state.buttonNewChangeClicked = value;
    }
}

export default mutations;
