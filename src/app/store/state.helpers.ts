import {AppState} from "./state.types"
const persistState = require('redux-localstorage');
const createLogger = require('redux-logger');

export const middleware = [
    createLogger({
        level: 'info',
        collapsed: true
    })
];

export const enhancers = [
    persistState(
        '', {
            key: 'ngHMR',
            serialize: (state:AppState) => JSON.stringify(state),
            deserialize: (jsonStr:string) => JSON.parse(jsonStr),
        })
];