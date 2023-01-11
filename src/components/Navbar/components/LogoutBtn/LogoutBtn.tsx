import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { userLogout } from 'store/action-creators/auths';
import styles from './LogoutBtn.module.scss';

const LogoutBtn: FC = () => {    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        dispatch(userLogout());

        navigate("/");
    }

    return(
        <div className={styles.main}>
            <NavLink onClick={() => logOut()} to="/login">
                <button className="btn btn-danger">
                    Выйти
                </button>
            </NavLink>
        </div>
    )
}

export default LogoutBtn;
