import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({
    counter: counterReducer
})

// let preloadedState;
// const persistedValuesString = localStorage.getItem('app-state')
// if (persistedValuesString) {
//     preloadedState = JSON.parse(persistedValuesString)
// }
//
// export const store = createStore(rootReducer, preloadedState)
//
// store.subscribe(()=>{
//     localStorage.setItem('app-state', JSON.stringify(store.getState()))
// })

export const store = createStore(rootReducer, loadState())

store.subscribe(()=>{
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>

