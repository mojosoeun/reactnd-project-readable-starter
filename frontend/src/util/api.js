const headers = {
    'Accept': 'application/json',
    'Authorization': 'whatever-you-want'
}

const URL = 'http://localhost:3001'

// category
/*
{
  "categories": [
    {
      "name": "react",
      "path": "react"
    },
    {
      "name": "redux",
      "path": "redux"
    },
    {
      "name": "udacity",
      "path": "udacity"
    }
  ]
}
*/
export const fetchCategories = () => {
    return fetch(`${URL}/categories`, { headers })
        .then((res) => res.json())
        .then((data) => data.categories)
}

// post
/*
[
  {
    "id": "8xf0y6ziyjabvozdd253nd",
    "timestamp": 1467166872634,
    "title": "Udacity is the best place to learn React",
    "body": "Everyone says so after all.",
    "author": "thingtwo",
    "category": "react",
    "voteScore": 6,
    "deleted": false
  },
  {
    "id": "6ni6ok3ym7mf1p33lnez",
    "timestamp": 1468479767190,
    "title": "Learn Redux in 10 minutes!",
    "body": "Just kidding. It takes more than 10 minutes to learn technology.",
    "author": "thingone",
    "category": "redux",
    "voteScore": -5,
    "deleted": false
  }
]

*/
export const fetchPosts = () => {
    return fetch(`${URL}/posts`, {
        headers,
        method: 'GET'
    }).then((res) => res.json())
}

export const fetchCategoryPosts = (category) => {
    fetch(`${URL}/${category}/posts`, {
        headers,
        method: 'GET'
    }).then((res) => res.json())
}

export const addPost = (body) => {
    fetch(`${URL}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
}

export const getPostDetail = (id) => {
    fetch(`${URL}/posts/${id}`, {
        headers,
        method: 'GET'
    }).then((res) => res.json())
}

export const votePost = (id) => {
    fetch(`${URL}/posts/${id}`, {
        headers,
        method: 'POST'
    }).then((res) => res.json())
}

export const updatePost = (id) => {
    fetch(`${URL}/posts/${id}`, {
        headers,
        method: 'PUT'
    }).then((res) => res.json())
}

export const deletePost = (id) => {
    fetch(`${URL}/posts/${id}`, {
        headers,
        method: 'DELETE'
    }).then((res) => res.json())
}

//comment
export const getPostComment = (id) => {
    fetch(`${URL}/posts/${id}/comments`, {
        headers,
        method: 'GET'
    }).then((res) => res.json())
}

export const addComment = (id) => {
    fetch(`${URL}/comments`, {
        headers,
        method: 'POST'
    }).then((res) => res.json())
}

export const getComment = (id) => {
    fetch(`${URL}/comments/${id}`, {
        headers,
        method: 'GET'
    }).then((res) => res.json())
}

export const voteComment = (id) => {
    fetch(`${URL}/comments/${id}`, {
        headers,
        method: 'POST'
    }).then((res) => res.json())
}

export const updateComment = (id) => {
    fetch(`${URL}/comments/${id}`, {
        headers,
        method: 'PUT'
    }).then((res) => res.json())
}

export const deleteComment = (id) => {
    fetch(`${URL}/comments/${id}`, {
        headers,
        method: 'DELETE'
    }).then((res) => res.json())
}