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
    ADD_COMMENT,
    FETCH_POST,
    FETCH_POST_DETAIL,
    FETCH_COMMENT
} from '../actions/postAction'


const initialState = Immutable.fromJS({
    list: [],
    detail: {
        post: {},
        comments: [],
    }
})

function post(state = initialState, action){
    switch (action.type) {
        case FETCH_POST:
            return Immutable.fromJS(state).set('list', action.posts).toJS();
        case FETCH_POST_DETAIL:
            return Immutable.fromJS(state).setIn(['detail', 'post'], action.post).toJS();
        case VOTE_POST:
            const index = Immutable.fromJS(state).get('list').findIndex(item => {
                return item.get('id') === action.post.id
            })
            return Immutable.fromJS(state).setIn(['list', index, 'voteScore'], action.post.voteScore).toJS();
        case ADD_POST:
            return {...state}
        case DELETE_POST:
            const idx = Immutable.fromJS(state).get('list').findIndex(item => {
                return item.get('id') === action.deletedPost.id
            })
            return Immutable.fromJS(state).set('list',  Immutable.fromJS(state).get('list').remove(idx)).toJS();
        case UPDATE_POST:
            return {...state}
        default:
            return state
    }
}

function comment(state = {}, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return Immutable.fromJS(state).setIn(['detail', 'comments'],  Immutable.fromJS(state).get(['detail', 'comments']).push(action.comment)).toJS();
        case FETCH_COMMENT:
            return Immutable.fromJS(state).setIn(['detail', 'comments'], action.comments).toJS();
        case VOTE_COMMENT:
            const index = Immutable.fromJS(state).getIn(['detail', 'comments']).findIndex(item => {
                return item.get('id') === action.comment.id
            })
            return Immutable.fromJS(state).setIn(['detail', 'comments', index, 'voteScore'], action.comment.voteScore).toJS();
        case DELETE_COMMENT:
            const idx = Immutable.fromJS(state).getIn(['detail', 'comments']).findIndex(item => {
                return item.get('id') === action.deletedComment.id
            })
            return Immutable.fromJS(state).setIn(['detail', 'comments'],  Immutable.fromJS(state).get(['detail', 'comments']).remove(idx)).toJS();
        default :
            return state
    }
}

export default combineReducers({
    post,
    comment
})
