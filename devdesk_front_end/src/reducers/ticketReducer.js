import { FETCH_ALL_TICKETS,
        FETCH_ALL_TICKETS_SUCCESS,
    FETCH_ALL_TICKETS_FAILURE,
        POST_NEW_TICKET,
        POST_NEW_TICKET_SUCCESS,
    POST_NEW_TICKET_FAILURE,
        DELETE_TICKET_DATA,
        DELETE_TICKET_DATA_SUCCESS,
    DELETE_TICKET_DATA_FAILURE,
        UPDATE_TICKET_DATA,
        UPDATE_TICKET_DATA_SUCCESS,
    UPDATE_TICKET_DATA_FAILURE,
        HELP_TICKET_DATA,
    HELP_TICKET_DATA_SUCCESS,
    HELP_TICKET_DATA_FAILURE,
        UNHELP_TICKET_DATA,
    UNHELP_TICKET_DATA_SUCCESS,
    UNHELP_TICKET_DATA_FAILURE,
        FETCH_RESOLVED_TICKET,
    FETCH_RESOLVED_TICKET_SUCCESS,
    FETCH_RESOLVED_TICKET_FAILURE,
        FETCH_UNRESOLVED_TICKET,
    FETCH_UNRESOLVED_TICKET_SUCCESS,
    FETCH_UNRESOLVED_TICKET_FAILURE
        } from '../actions/index';

export const initialState = {
        ticket: [],
        error: null
}

export function ticketReducer(state = initialState, action) {
        switch (action.type){
                case FETCH_ALL_TICKETS:
                        return{
                                ...state
                        }

                case FETCH_ALL_TICKETS_SUCCESS:
                        return {
                                ...state,
                                ticket: action.payload
                        }

                case FETCH_ALL_TICKETS_FAILURE:
                        return {
                                ...state,
                                error: action.payload
                        }

                case FETCH_RESOLVED_TICKET:
                        return {
                                ...state
                        }

                case FETCH_RESOLVED_TICKET_SUCCESS:
                        return {
                                ...state,
                                ticket: action.payload
                        }

                case FETCH_RESOLVED_TICKET_FAILURE:
                        return {
                                ...state,
                                error: action.payload
                        }

                case FETCH_UNRESOLVED_TICKET:
                        return {
                                ...state
                        }

                case FETCH_UNRESOLVED_TICKET_SUCCESS:
                        return {
                                ...state,
                                ticket: action.payload
                        }

                case FETCH_UNRESOLVED_TICKET_FAILURE:
                        return {
                                ...state,
                                error: action.payload
                        }
                        
                case HELP_TICKET_DATA:
                        return {
                                ...state
                        }

                case HELP_TICKET_DATA_SUCCESS:
                        return {
                                ...state,
                                ticket: action.payload
                        }

                case HELP_TICKET_DATA_FAILURE:
                        return {
                                ...state,
                                error: action.payload
                        }
                        
                case UNHELP_TICKET_DATA:
                        return {
                                ...state
                        }

                UNHELP_TICKET_DATA_SUCCESS:
                return {
                                ...state,
                        ticket: action.payload
                }

                case UNHELP_TICKET_DATA_FAILURE:
                        return {
                                ...state,
                                error: action.payload
                        }
                        
                case POST_NEW_TICKET:
                        return {
                                ...state
                        }

                case POST_NEW_TICKET_SUCCESS:
                        return {
                                ...state,
                                ticket: action.payload
                        }

                case POST_NEW_TICKET_FAILURE:
                        return {
                                ...state,
                                error: action.payload
                        }

                case DELETE_TICKET_DATA:
                        return {
                                ...state
                        }

                case DELETE_TICKET_DATA_SUCCESS:
                        return {
                                ...state,
                                ticket: action.payload
                        }

                case DELETE_TICKET_DATA_FAILURE:
                        return {
                                ...state,
                                error: action.payload
                        }
                        
                case UPDATE_TICKET_DATA:
                        return {
                                ...state
                        }

                case UPDATE_TICKET_DATA_SUCCESS:
                        return {
                                ...state,
                                ticket: action.payload
                        }

                case UPDATE_TICKET_DATA_FAILURE:
                        return {
                                ...state,
                                error: action.payload
                        }
                        
                default: 
                        return state
        }
}

export default ticketReducer;