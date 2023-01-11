import { Serial } from "types/Serial";

export interface SerialsState {
    serials:  Serial[]
    page:     number
    loading:  boolean
    error:    string | null
}

export enum SerialsActionTypes {
    FETCH_SERIALS         = 'FETCH_SERIALS',
    FETCH_SERIALS_SUCCESS = 'FETCH_SERIALS_SUCCESS',
    FETCH_SERIALS_ERROR   = 'FETCH_SERIALS_ERROR',
}

export interface FetchSerialsAction {
    type:    SerialsActionTypes.FETCH_SERIALS
}

export interface FetchSerialsSuccess {
    type:    SerialsActionTypes.FETCH_SERIALS_SUCCESS
    payload: Serial[]
}

export interface FetchSerialsError {
    type:    SerialsActionTypes.FETCH_SERIALS_ERROR
    payload: string
}


export type SerialsAction = FetchSerialsAction | FetchSerialsSuccess | FetchSerialsError;