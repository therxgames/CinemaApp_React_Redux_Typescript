export enum EventTypes {
    CHANGE = 'CHANGE',
    BLUR   = 'BLUR',
}

interface Valid<T> extends IValidators {
    value:      T;
    trigger:    Array<EventTypes>;
    isValid?:   boolean;
    errorText?: string;
};

export interface IValidators {
    required?:  Valid<boolean>;
    minLength?: Valid<number>;
    maxLength?: Valid<number>;
    regExp?:    Valid<string>;
}