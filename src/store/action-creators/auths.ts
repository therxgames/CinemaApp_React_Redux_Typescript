import { UserLoginAction, UserLogoutAction, UserState, UserActionTypes } from "../types/user";

export const userLogin = (user: UserState): UserLoginAction => {
    return {
        type: UserActionTypes.LOG_IN,
        payload: {
            login: user.login,
            email: user.email,
        }
    };
}

export const userLogout = (): UserLogoutAction => {
    return {
        type: UserActionTypes.LOG_OUT,
        payload: {
            login: "",
            email: "",
        }
    };
}