import * as ActionTypes from "../constants/ActionTypes";

export default function AuthReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.AUTHENTICATION_ERROR :
            return  {...state, userAuthenticated: false};
        default:
            return state
    }
}