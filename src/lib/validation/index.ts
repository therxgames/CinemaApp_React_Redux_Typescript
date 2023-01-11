import { EventTypes, IValidators } from "./IValidators";
import { validErrors } from "./validErrors";
import { validRules } from "./validRules";

export const checkValidation = (validators: IValidators, triggerType: EventTypes, fieldVal: string) => {
    if(!validators) return null;

    for (const validator in validators) {
        const validatorValue = validators[validator as keyof IValidators];
        const { value, errorText, trigger } = validatorValue!;
        let isValid;
        
        if (trigger.includes(triggerType)) {
            switch (validator) {
                case 'required':
                    isValid = validRules.required(fieldVal);
    
                    if(!isValid) {
                        return errorText ?? validErrors.required();
                    }
                    break;
    
                case 'minLength':
                    isValid = validRules.minLength(fieldVal, value as number);
    
                    if(!isValid) {
                        return errorText ?? validErrors.minLength(value as number);
                    }
                    break;
    
                case 'maxLength':
                    isValid = validRules.maxLength(fieldVal, value as number);
    
                    if(!isValid) {
                        return errorText ?? validErrors.maxLength(value as number);
                    }
                    break;
    
                case 'regExp':
                    isValid = validRules.regExp(value as string, fieldVal);
    
                    if(!isValid) {
                        return errorText ?? validErrors.regExp();
                    }
                    break;
    
                default:
                    break;
            }
        }        
    }

    return null;
}

