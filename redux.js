

class Store {
    #reducer
    #state
    #listeners
    constructor (reducer, initState) {
        this.#reducer = reducer;
        this.#state = initState;
        this.#listeners = [];
    }

    getState () {
        return this.#state;
    }

    dispatch(action) {
        const oldState = this.#state
        this.#state = this.#reducer(this.#state, action);

        console.log(this.#state === oldState);

        if(oldState !== this.#state) {
            this.#listeners.forEach(listener);
        }
    }

    subscribe(listener) {
        this.#listeners.push(listener);
    }
}

const initState = {count:0}
const store = new Store(reducer, action);

Store.subscribe(()=> {
    console.log(store.count)
})