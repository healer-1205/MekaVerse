import {
    LANGUAGE,
    SET_CURRENT_USER,
    USER_LOADING
} from '../actions/types.js';

const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    language: 'EN',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            console.log('reducers : ', action)
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}