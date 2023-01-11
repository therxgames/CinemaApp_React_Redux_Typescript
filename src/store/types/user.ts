export interface AuthInfoState {
    isLogged?: boolean
}

export interface UserState extends AuthInfoState {
    login: string
    email: string
}

export enum UserActionTypes {
    LOG_IN  = 'LOG_IN',
    LOG_OUT = 'LOG_OUT',
}

export interface UserLoginAction {
    type: UserActionTypes.LOG_IN
    payload: UserState
}

export interface UserLogoutAction {
    type: UserActionTypes.LOG_OUT
    payload: UserState
}

export type UserAction = UserLoginAction | UserLogoutAction;