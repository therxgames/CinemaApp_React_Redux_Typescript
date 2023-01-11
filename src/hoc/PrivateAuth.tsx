import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const PrivateAuth: FC<PropsWithChildren> = ({ children }) => {    
    const isLogged = useTypedSelector(state => state.user.isLogged);
    
    if(!isLogged) {
        return <Navigate to="/login" />
    }

    return <div>{ children }</div>
}

export  { PrivateAuth }

