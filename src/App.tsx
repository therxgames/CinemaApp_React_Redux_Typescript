import { FC } from 'react';
import { Routes, Route } from "react-router-dom";
import { PrivateAuth } from './hoc/PrivateAuth';
import Movies from 'pages/Movies/Movies';
import Movie from 'pages/Movie/Movie';
import Serial from 'pages/Serial/Serial';
import Serials from 'pages/Serials/Serials';
import Auth from 'pages/Auth/Auth';

const App: FC = () => {    
    return(
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="/movies" element={<Movies />}  />
            <Route path="/serials/:id" element={<Serial />}  />
            <Route path="/serials" element={<Serials />}  />
        </Routes>
    )
}

export default App;
