import { combineReducers } from 'redux'
import {
    DELETE_POST,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    UPDATE_POST,
    VOTE_COMMENT,
    VOTE_POST,
    ADD_POST,
    FETCH_CATEGORY,
    FETCH_POST
} from '../actions'

function category(state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                ...state,
                fetched: true,
                categories: action.categories
            }
        default:
            return state
    }
}
function post(state = {}, action){
    switch (action.type) {
        case DELETE_POST:
            return {...state}
        case UPDATE_POST:
            return {...state}
        case VOTE_POST:
            return {...state};
        default:
            return state
    }
}

function comment(state = {}, action) {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {...state}
        case VOTE_COMMENT:
            return {...state}
        case DELETE_COMMENT:
            return state;
        default :
            return state
    }
}

export default combineReducers({
    post,
    comment,
    category
})