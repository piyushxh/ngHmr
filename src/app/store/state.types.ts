/**
 * Define an interface that describes the "shape" of a counter object.
 * Each Counter object must have a string property 'name' and a
 * number property 'value'
 */
export interface Counter {
    id: string,
    name: string
    value: number
}

/**
 * Define an interface that describes the "shape" of our application state.
 * Currently, our state is very simple - we just have a single property,
 * 'counters', which must be an array of objects that conform to the Counter "shape"
 * (i.e., they must each have a 'name' and a 'value' property).
 */
export interface AppState {
    counters: Counter[]
}

/**
 * Defines the initial application state; just assign an empty array to the 'counters' prop
 */
export const INITIAL_STATE:AppState = {
    counters: []
}

/**
 * Defines an interface that describes the "shape" of an action.
 * I've chosen to force every action to have a 'type' string property, and
 * a 'payload' property, which for now can be anything.
 * Note that the Redux lib provides an Action interface, but it only has a
 * `type: any` property. I wanted something a little more opinionated here...
 */
export interface Action {
    type: string,
    payload: any
}