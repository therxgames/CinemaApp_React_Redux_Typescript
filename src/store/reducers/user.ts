import { UserState, UserActionTypes, UserAction } from "../types/user";

const initialState: UserState = {
    login:    "",
    email:    "",
    isLogged: true
}

export const user = (state = initialState, action: UserAction): UserState  => {
    switch (action.type) {
        case UserActionTypes.LOG_IN:
            return {
                ...state, 
                login:    action.payload.login,
                email:    action.payload.email,
                isLogged: true,
            }
        case UserActionTypes.LOG_OUT:
            return {
                ...state, 
                login:    action.payload.login,
                email:    action.payload.email,
                isLogged: false,
            }
        default: 
            return state;
    }
}