import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: FC = () => {    
    return(
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink  className="nav-link" to="/movies">Фильмы</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/serials">Сериалы</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Люди</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;
