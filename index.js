const reduxjs = require('@reduxjs/toolkit')
const { configureStore, applyMiddleware } = reduxjs
const { combineReducers } = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE' 
const BUY_ICECREAM = 'BUY_ICECREAM'

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState ={
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [logger] // Pass the middleware as an array
})
    console.log('Initial state', store.getState())
    const unsubscribe = store.subscribe(() => {})
    store.dispatch(buyCake())
    store.dispatch(buyCake())
    store.dispatch(buyIceCream())
    unsubscribe()