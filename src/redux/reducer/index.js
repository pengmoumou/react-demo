// import { combineReducers } from 'redux'
import {
    TESTACTION
} from '../action'

let initstate = {};

function test(state = initstate, action) {
    switch (action.type) {
        case TESTACTION:
            return {
                text: action.text,
                completed: false
            }

        default:
            return state
    }
}

// const test = combineReducers({

// })

export default test