import * as API from '../util/api'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const CREATE_POST = 'CREATE_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const FETCH_POST = 'FETCH_POST'
export const FETCH_POST_DETAIL = 'FETCH_POST_DETAIL'
export const FETCH_COMMENT = 'FETCH_COMMENT'

export function fetchPostDetail(id) {
    return (dispatch) => {
        API.getPostDetail(id).then((data) => {
            dispatch(getPostDetail(data))
        })
    }
}

function getPostDetail(post) {
    return {
        type: FETCH_POST_DETAIL,
        post
    }
}

export function fetchPost() {
    return (dispatch) => {
        API.fetchPosts().then((posts) => {
            dispatch(getPosts(posts))
        });
    }
}


export function votePost (id, option) {
    console.log(id, option);
    return (dispatch) => {
        API.votePost(id, option).then((post) => {
            dispatch(doVotePost(post))
        })
    }
}

function doVotePost (post) {
    return {
        type: VOTE_POST,
        post
    }
}

function getPosts(posts) {
    return {
        type: FETCH_POST,
        posts
    }
}


export function fetchComments(id) {
    return (dispatch) => {
        API.getPostComment(id).then((comments) => {
            dispatch(getComments(comments))
        });
    }
}

function getComments(comments){
    return {
        type: FETCH_COMMENT,
        comments
    }
}

function createPostSuccess(data) {
    return {
        type: CREATE_POST,
        payload: data
    };
}

export function deletePost (id) {
    return (dispatch) => {
        API.deletePost(id).then(() => {
            dispatch(doDeletePost())
        })
    }
}

function doDeletePost() {
    return {
        type: DELETE_POST
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
