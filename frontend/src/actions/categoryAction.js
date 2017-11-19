import * as API from '../util/api'
export const FETCH_CATEGORY = 'FETCH_CATEGORY'

export function fetchCategory() {
    return (dispatch) => {
        API.fetchCategories().then((categories) => {
            dispatch(getCategories(categories))
        });
    }
}

function getCategories(categories) {
    return {
        type: FETCH_CATEGORY,
        categories
    }
}
