import { Serial } from "types/Serial";

export interface SerialState {
    serial:   Serial | null
    loading:  boolean
    error:    string | null
}

export enum SerialActionTypes {
    FETCH_SERIAL         = 'FETCH_SERIAL',
    FETCH_SERIAL_SUCCESS = 'FETCH_SERIAL_SUCCESS',
    FETCH_SERIAL_ERROR   = 'FETCH_SERIAL_ERROR',
}

export interface FetchSerialAction {
    type:    SerialActionTypes.FETCH_SERIAL
}

export interface FetchSerialSuccess {
    type:    SerialActionTypes.FETCH_SERIAL_SUCCESS
    payload: Serial
}

export interface FetchSerialError {
    type:    SerialActionTypes.FETCH_SERIAL_ERROR
    payload: string
}


export type SerialAction = FetchSerialAction | FetchSerialSuccess | FetchSerialError;