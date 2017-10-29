import { fetchCategories } from '../util/api'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const CREATE_POST = 'CREATE_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const FETCH_POST = 'FETCH_POST'
export const FETCH_CATEGORY = 'FETCH_CATEGORY'

export function fetchCategory() {
    return (dispatch) => {
        fetchCategories().then((categories) => {
            dispatch(getCategories(categories))
        });
    }
}

export function getCategories(categories) {
    return {
        type: FETCH_CATEGORY,
        categories
    }
}

export function fetchPost() {
    return {
        type: FETCH_POST
    }
}

function createPostSuccess(data) {
    return {
        type: CREATE_POST,
        payload: data
    };
}

export function deletePost ({id}) {
    return {
        type: DELETE_POST,
        id
    }
}

export function votePost ({id, action}) {
    return {
        type: VOTE_POST,
        id,
        action
    }
}

export function updatePost({id, title, body}) {
    return {
        type: UPDATE_POST,
        title,
        body
    }
}

export function voteComment({id}) {
    return {
        type: VOTE_COMMENT,
        id
    }
}

export function updateComment({id, timestamp, body}) {
    return {
        type: UPDATE_COMMENT,
        id,
        timestamp,
        body
    }
}

export function deleteComment({id}){
    return {
        type: DELETE_COMMENT,
        id
    }
}
