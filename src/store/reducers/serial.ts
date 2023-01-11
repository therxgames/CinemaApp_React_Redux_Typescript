import { SerialAction, SerialActionTypes, SerialState } from "store/types/serial";

const initialState: SerialState = {
    serial:  null,
    loading: false,
    error:   null,
}

export const serial = (state = initialState, action: SerialAction): SerialState  => {
    switch (action.type) {
        case SerialActionTypes.FETCH_SERIAL:
            return {
                ...state,
                loading: true, 
                error: null
            }

        case SerialActionTypes.FETCH_SERIAL_SUCCESS:
            return {
                serial: action.payload, 
                loading: false, 
                error: null,
            }

        case SerialActionTypes.FETCH_SERIAL_ERROR:
            return {
                ...state,
                loading: false, 
                error: action.payload
            }

        default: 
            return state;
    }
}