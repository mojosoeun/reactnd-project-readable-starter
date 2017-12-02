import * as API from '../util/api'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const ADD_POST = 'ADD_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const FETCH_POST = 'FETCH_POST'
export const FETCH_POST_DETAIL = 'FETCH_POST_DETAIL'
export const FETCH_COMMENT = 'FETCH_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const FETCH_COMMENT_COUNT = 'FETCH_COMMENT_COUNT'


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

export function addComment(data) {
    return (dispatch) => {
        API.addComment(data).then((comment) => {
            dispatch(addCommentSuccess(comment))
        });
    }
}

function addCommentSuccess(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function addPost(data) {
  return (dispatch) => {
    API.addPost(data).then(() => {
      dispatch(addPostSuccess())
    })
  }
}

function addPostSuccess() {
    return {
        type: ADD_POST,
    };
}

export function deletePost (id) {
    return (dispatch) => {
        API.deletePost(id).then((deletedPost) => {
            dispatch(doDeletePost(deletedPost))
        })
    }
}

function doDeletePost(deletedPost) {
    return {
        type: DELETE_POST,
        deletedPost
    }
}

export function updatePost(id, data) {
    return (dispatch) => {
        API.updatePost(id, data).then(() => {
            dispatch(updatePostSuccess())
        })
    }
}

function updatePostSuccess() {
    return {
        type: UPDATE_POST
    }
}

export function voteComment (id, option) {
    return (dispatch) => {
        API.voteComment(id, option).then((comment) => {
            dispatch(doVoteComment(comment))
        })
    }
}

export function doVoteComment(comment) {
    return {
        type: VOTE_COMMENT,
        comment
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

export function deleteComment(id){
    return (dispatch) => {
        API.deleteComment(id).then((deletedComment) => {
            dispatch(doDeleteComment(deletedComment))
        })
    }
}

function doDeleteComment(deletedComment) {
    return {
        type: DELETE_COMMENT,
        deletedComment
    }
}