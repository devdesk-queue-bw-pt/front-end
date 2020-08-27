import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'

export const FETCH_ALL_TICKETS = "FETCH_ALL_TICKETS"
export const FETCH_ALL_TICKETS_SUCCESS = "FETCH_ALL_TICKETS_FAILURE"
export const FETCH_ALL_TICKETS_FAILURE = "FETCH_ALL_TICKETS_SUCCESS"
export const POST_NEW_TICKET = "POST_NEW_TICKET"
export const POST_NEW_TICKET_SUCCESS = "POST_NEW_TICKET_SUCCESS"
export const POST_NEW_TICKET_FAILURE = "POST_NEW_TICKET_FAILURE"
export const DELETE_TICKET_DATA = "DELETE_TICKET_DATA"
export const DELETE_TICKET_DATA_SUCCESS = "DELETE_TICKET_DATA_SUCCESS"
export const DELETE_TICKET_DATA_FAILURE = "DELETE_TICKET_DATA_FAILURE"
export const UPDATE_TICKET_DATA = "UPDATE_TICKET_DATA"
export const UPDATE_TICKET_DATA_SUCCESS = "UPDATE_TICKET_DATA_SUCCESS"
export const UPDATE_TICKET_DATA_FAILURE = "UPDATE_TICKET_DATA_FAILURE"
export const HELP_TICKET_DATA = "HELP_TICKET_DATA"
export const HELP_TICKET_DATA_SUCCESS = "HELP_TICKET_DATA_SUCCESS"
export const HELP_TICKET_DATA_FAILURE = "HELP_TICKET_DATA_FAILURE"
export const UNHELP_TICKET_DATA = "UNHELP_TICKET_DATA"
export const UNHELP_TICKET_DATA_SUCCESS = "UNHELP_TICKET_DATA_SUCCESS"
export const UNHELP_TICKET_DATA_FAILURE = "UNHELP_TICKET_DATA_FAILURE"
export const FETCH_RESOLVED_TICKET = "FETCH_RESOLVED_TICKET"
export const FETCH_RESOLVED_TICKET_SUCCESS = "FETCH_RESOLVED_TICKET_SUCCESS"
export const FETCH_RESOLVED_TICKET_FAILURE = "FETCH_RESOLVED_TICKET_FAILURE"
export const FETCH_UNRESOLVED_TICKET = "FETCH_UNRESOLVED_TICKET"
export const FETCH_UNRESOLVED_TICKET_SUCCESS = "FETCH_UNRESOLVED_TICKET_SUCCESS"
export const FETCH_UNRESOLVED_TICKET_FAILURE = "FETCH_UNRESOLVED_TICKET_FAILURE"
// export const LOGIN = "LOGIN"
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
// export const LOGIN_FAILURE = "LOGIN_FAILURE"
// export const LOGOUT = "LOGOUT"
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
// export const LOGOUT_FAILURE = "LOGOUT_FAILURE"
export const POST_REGISTRATION = "POST_REGISTRATION"
export const POST_REGISTRATION_SUCCESS = "POST_REGISTRATION_SUCCESS"
export const POST_REGISTRATION_FAILURE = "POST_REGISTRATION_FAILURE"

export const getAllTickets = () => dispatch => {
    dispatch({type: FETCH_ALL_TICKETS})
    axiosWithAuth()
        .get("/tickets")
            .then(res => {
                dispatch({type: FETCH_ALL_TICKETS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCH_ALL_TICKETS_FAILURE, payload: err.response })
            })
}

export const getAllResolvedTickets = () => dispatch => {
    dispatch({ type: FETCH_RESOLVED_TICKET})
    axiosWithAuth()
        .get("/resolved")
            .then(res => {
                dispatch({type:FETCH_RESOLVED_TICKET_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCH_RESOLVED_TICKET_FAILURE, payload: err.response})
            })
}

export const getAllUnresolvedTickets = () => dispatch => {
    dispatch({type:FETCH_UNRESOLVED_TICKET})
    axiosWithAuth()
        .get("/unresolved")
            .then(res => {
                dispatch({type: FETCH_UNRESOLVED_TICKET_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCH_UNRESOLVED_TICKET_FAILURE, payload: err.response})
            })
}
export const postNewTicket = newTicket => dispatch => {
    dispatch({type: POST_NEW_TICKET})
    axiosWithAuth()
        .post("/tickets", newTicket)
        .then(res => {
            dispatch({ type: POST_NEW_TICKET_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: POST_NEW_TICKET_FAILURE, payload: err.response})
        })
}
export const deleteTicket = ticket => dispatch => {
    dispatch({type: DELETE_TICKET_DATA})
    axiosWithAuth()
        .delete(`/tickets/${ticket.id}`)
        .then(res => {
            dispatch({type: DELETE_TICKET_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: DELETE_TICKET_DATA_FAILURE, payload: err.response })
        })
}
export const updateTicketData = editTicket => dispatch => {
    dispatch({type: UPDATE_TICKET_DATA})
    axiosWithAuth()
        .put(`/tickets/${editTicket.id}`, editTicket)
        .then(res => {
            dispatch({type: UPDATE_TICKET_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({type: UPDATE_TICKET_DATA_FAILURE, payload: err.response })
        })
}

export const postNewUser = newUser => {
    dispatch({type: POST_REGISTRATION})
    axios
        .get("", newUser)
        .then()
}
