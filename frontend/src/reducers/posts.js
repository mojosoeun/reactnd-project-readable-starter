import { combineReducers } from 'redux'
import { Map, List } from 'immutable';
import {
    DELETE_POST,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    UPDATE_POST,
    VOTE_COMMENT,
    VOTE_POST,
    ADD_POST,
    FETCH_CATEGORY,
    FETCH_POST,
    FETCH_POST_DETAIL,
    FETCH_COMMENT
} from '../actions/postAction'


const initialState = Map({
    list: [],
    detail: Map({})
})

function post(state = initialState, action){
    const list = state.get('list');
    switch (action.type) {
        case FETCH_POST:
            return state.set('list', action.posts)
        case FETCH_POST_DETAIL:
            const detail = state.get('detail');
            return state.set('detail', action.posts)
        case VOTE_POST:
            // const list = state.list.map((list) => {
            //     if (list.id === action.post.id) {
            //         console.log("dddddd");
            //         const tmp  = Object.assign(list, action.post)
            //         return tmp;
            //     }
            //     return list
            // })

            // console.log(list)
            return {
                ...state,
                list: list,
            };
        case DELETE_POST:
            return {...state}
        case UPDATE_POST:
            return {...state}
        default:
            return state
    }
}

function comment(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENT:
            return {
                ...state,
                comment: action.comments
            }
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
    comment
})
