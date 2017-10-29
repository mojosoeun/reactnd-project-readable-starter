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

const initialState = {
    list : []
}

function category(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                ...state,
                list: action.categories
            }
        default:
            return state
    }
}
function post(state = initialState, action){
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                list: action.posts
            }
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