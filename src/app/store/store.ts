import { AppState, INITIAL_STATE, Action } from "./state.types"
import { INCREMENT, DECREMENT, CREATE } from "./counter.actions"

/**
 * The redux reducer - the function that is in charge of managing our app state.
 * When actions are dispatched to Redux (via the dispatch() method from Redux/ng2-redux),
 * Redux will invoke this reducer function, passing in the current app state and the action.
 * The AppModule constructor takes care of registering this function with Redux, via the
 * `configureStore()` method provided by ng2-redux.
 *
 * Note: This function must not mutate the state argument. See Redux docs for a detailed explanation.
 *
 * @param state
 * @param action
 */
export function rootReducer(state:AppState = INITIAL_STATE, action:Action) : AppState {
    switch (action.type) {
        case CREATE:
            return createCounter(state, action)
        case INCREMENT:
            return updateCounter(state, action, 1)
        case DECREMENT:
            return updateCounter(state, action, -1)
        default:
            return state
    }
}

function generateId(state:AppState) : string {
    return '' + state.counters.map( c => {
        return parseInt(c.id, 10)
    }).reduce( (a, b) => {
        return Math.max(a, b) + 1
    }, 0)
}

function createCounter(state:AppState, action:Action) : AppState {
    let counter = {
        id: generateId(state),
        name: action.payload.name,
        value: action.payload.value || 0
    }

    let counters = [...state.counters, counter]
    return Object.assign({}, state, { counters: counters })
}

/**
 * increment or decrement a counter (according to the given sign)
 * @param state
 * @param action
 * @param sign - should be +1 or -1
 * @returns {{counters: Counter[]}}
 */
function updateCounter(state:AppState, action:Action, sign:number) : AppState {
    let updatedCounter = Object.assign({}, action.payload.counter, {
        value: action.payload.counter.value + sign*action.payload.offset
    })

    let index = state.counters.findIndex( c => c.id === action.payload.counter.id )
    let newCounters = state.counters.slice()
    newCounters.splice(index, 1, updatedCounter)
    return Object.assign({}, state, { counters: newCounters })
}
