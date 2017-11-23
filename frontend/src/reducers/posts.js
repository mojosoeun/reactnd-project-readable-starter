import { combineReducers } from 'redux'
import Immutable from 'immutable'

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


const initialState = Immutable.fromJS({
    list: [],
    detail: {},
    comments: []
})

function post(state = initialState, action){
    switch (action.type) {
        case FETCH_POST:
            return Immutable.fromJS(state).set('list', action.posts).toJS();
        case FETCH_POST_DETAIL:
            return Immutable.fromJS(state).set('detail', action.post).toJS();
        case VOTE_POST:
            const index = Immutable.fromJS(state).get('list').findIndex(item => item.id !== action.post.id)
            return Immutable.fromJS(state).setIn(['list', index, 'voteScore'], action.post.voteScore).toJS();
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
            return Immutable.fromJS(state).set('comments', action.comments).toJS();
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
