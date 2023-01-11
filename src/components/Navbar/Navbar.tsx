import { FC } from 'react';
import Navigation from './components/Navigation/Navigation';
import LogoutBtn from './components/LogoutBtn/LogoutBtn';
import Search from './components/Search/Search';

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = () => {    

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" onClick={(e) => e.stopPropagation()}>
            <div className="container">
                <a className="navbar-brand" href="/">Архив Кино</a>

                <Navigation />

                <Search />

                <LogoutBtn />
            </div>
        </nav>
    )
}

export default Navbar;
