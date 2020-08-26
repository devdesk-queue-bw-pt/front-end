import { LOGIN,
        LOGIN_SUCCESS,
        LOGIN_FAILURE,
        LOGOUT,
        POST_REGISTRATION,
        POST_REGISTRATION_SUCCESS,
        POST_REGISTRATION_FAILURE
        } from '../actions/index';

export const initialState = {
    user: [],
    error: null
}

export function userReducer (state = initialState, action ) {
    switch (action.type){
        case LOGIN:
            return{
                ...state,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case LOGOUT:
            return {
                ...state,
            }

        case POST_REGISTRATION:
            return {
                ...state,
            }

        case POST_REGISTRATION_SUCCESS:
            return {
                ...state,
                user: action.payload,
            }

        case POST_REGISTRATION_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}