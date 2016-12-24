import { Injectable } from "@angular/core"
import {AppState, Counter} from "./state.types"
import { NgRedux } from 'ng2-redux';

/* Define a set of constant strings to be used as action 'type' values */
export const CREATE = 'CREATE'
export const INCREMENT = 'INC'
export const DECREMENT = 'DEC'

@Injectable()
export class CounterActions {

    /**
     * We're injecting an instance of NgRedux, parameterized with our AppState interface.
     *
     * @param ngRedux
     */
    constructor(private ngRedux:NgRedux<AppState>) { }

    /**
     * Dispatch a 'CREATE' action to create a new counter
     * @param name
     * @param initialValue
     * @returns {any<AppState>}
     */
    create = (name:string, initialValue:number = 0) => {
        return this.ngRedux.dispatch({
            type: CREATE,
            payload: {
                name: name,
                value: initialValue
            }
        })
    }

    /**
     * Dispatch an 'increment' action to increment an existing
     * counter by the specified amount
     * @param id - the id of the counter being incremented
     * @param offset - the amount by which to increment the counter value
     * @returns {any<AppState>}
     */
    increment = (counter:Counter, offset:number = 1) => {
        return this.ngRedux.dispatch({
            type: INCREMENT,
            payload: {
                counter: counter,
                offset: offset
            }
        })
    }

    /**
     * Dispatch a 'decrement' action to decremetn an existing counter
     * by the specified amount
     * @param id - the id of the counter being decremented
     * @param offset - the amount by which to decrement the counter value
     * @returns {any<AppState>}
     */
    decrement = (counter:Counter, offset:number = 1) => {
        return this.ngRedux.dispatch({
            type: DECREMENT,
            payload: {
                counter: counter,
                offset: offset
            }
        })
    }
}

