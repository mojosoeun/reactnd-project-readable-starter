import { combineReducers } from 'redux';
import { Map, List } from 'immutable';
import { FETCH_CATEGORY } from '../actions/categoryAction';

const initialState = Map({
    list: List([])
})

export default function category(state = initialState, action) {
    const list = state.get('list');
    switch (action.type) {
        case FETCH_CATEGORY:
            return state.set('list', action.categories)
        default:
            return state
    }
}
