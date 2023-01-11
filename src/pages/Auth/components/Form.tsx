import { FC, useState, FormEvent, useEffect } from 'react';
import InputText from 'components/UI/InputText';
import { IValidators, EventTypes } from 'lib/validation/IValidators';
import { EMAIL_REG } from 'const/regExpConst';
import { useDispatch } from 'react-redux';
import { userLogin } from 'store/action-creators/auths';
import { useNavigate } from 'react-router-dom';

const Form: FC = () => {    
    const [login, setLogin] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [validLogin, setValidLogin] = useState<boolean>(false);
    const [validEmail, setValidEmail] = useState<boolean>(false);

    const [validAll, setValidAll] = useState<boolean>(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginValidator: IValidators = {
        required: {
            value:   true,
            trigger: [
                EventTypes.CHANGE,
                EventTypes.BLUR,
            ]
        },
    }

    const emailValidator: IValidators = {
        required: {
            value:   true,
            trigger: [
                EventTypes.CHANGE,
                EventTypes.BLUR,
            ]
        },
        regExp: {
            value: EMAIL_REG,
            trigger: [
                EventTypes.BLUR,
            ]
        },
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        dispatch(userLogin({
            login,
            email,
        }));

        navigate("/");
    }
    
    useEffect(() => setValidAll(validLogin && validEmail), [validLogin, validEmail]);

    return(
        <form onSubmit={(e) => onSubmit(e)}>
            <h2 className="fw-bold mb-5 text-uppercase">Вход</h2>

            <InputText  id="login"
                        placeholder="Введите логин"
                        value={login} 
                        setValid = {setValidLogin}
                        setValue={setLogin} 
                        validators={loginValidator} />


            <InputText  id="email"
                        placeholder="Введите E-mail"
                        value={email} 
                        setValid = {setValidEmail}
                        setValue={setEmail} 
                        validators={emailValidator} />

            <button className="btn btn-outline-light btn-lg px-5 mt-5" type="submit" disabled={!validAll}>Войти</button>
        </form>
    )
}

export default Form;
