import { FC, ChangeEvent, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { checkValidation } from '../../lib/validation';
import { IValidators, EventTypes } from '../../lib/validation/IValidators';

interface InputTextProps {
    id:          string
    placeholder: string
    value:       string
    setValid:    Dispatch<SetStateAction<boolean>>
    setValue:    Dispatch<SetStateAction<string>>
    validators:  IValidators
}

const InputText: FC<InputTextProps> = ({ value, setValue, validators, id, placeholder, setValid }) => {    
    
    const [error, setError] = useState<string | null>("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { 
        setError(checkValidation(validators, EventTypes.CHANGE, e.target.value));
        setValue(e.target.value);  
    }

    const onBlur = () => { 
        setError(checkValidation(validators, EventTypes.BLUR, value));
    }

    useEffect(() => setValid(error == null), [error]);

    return(
        <div className="form-outline form-white mb-4">
            <input  type="text" 
                        id={id} 
                        className={`form-control form-control-lg ${error && "error"}`}
                        placeholder={placeholder}
                        value={value} 
                        onChange={e => onChangeHandler(e)}
                        onBlur={() => onBlur()} />

            {error &&  <div className="error__box mt-1">{ error }</div>}
        </div>
    )
}

export default InputText;
