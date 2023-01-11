import { FC, useEffect, useState } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { dispatchStore } from 'hooks/dispatchStore';
import { fetchMovies } from 'store/action-creators/movies';
import { PageWrap } from 'hoc/PageWrap';
import { BootstrapBlockWrap } from 'hoc/BootstrapBlockWrap';
import errorPage from 'assets/images/errorPage.jpg';
import Loader from 'components/Loader/Loader';
import MoviesList from './components/MoviesList/MoviesList';
import Sidebar from './components/Sidebar/Sidebar';
import styles from "./Movies.module.scss";
import { Movie } from 'types/Movie';

const MoviesPage: FC = () => {    
    const { movies, page, loading, error } = useTypedSelector(state => state.movies);
    
    const [sortedMovise, setSortedMovies] = useState<Movie[]>([]);
    const [selectValue, setSelectValue] = useState<string>('default');

    useEffect(() => {
        dispatchStore(fetchMovies());
    }, []);

    useEffect(() => {
        setSortedMovies(movies);
    }, [movies]);

    if (loading && page === 1) {
        return (
            <PageWrap contentClass={styles.page_loading}>
                <Loader />
            </PageWrap>
        )
    }

    if (error) {
        return (
            <PageWrap contentClass={styles.page_loading}>
                <div className="error_page">
                    <img src={errorPage} alt="Ошибка" />
                </div>
            </PageWrap>
        )  
    }

    return(
        <PageWrap contentClass={styles.page_container}>
            <BootstrapBlockWrap>
                <div className="col-2">
                    <Sidebar options={[{
                        value: "title_asc", 
                        text: "Name (inc)",
                        sort_by: "title",
                        type: 'ASC'
                    },
                    {
                        value: "title_desc", 
                        text: "Name (dec)",
                        sort_by: "title",
                        type: 'DESC'
                    },
                    {
                        value: "release_date_asc", 
                        text: "Date (inc)",
                        sort_by: "release_date",
                        type: 'ASC'
                    },
                    {
                        value: "release_date_desc", 
                        text: "Date (dec)",
                        sort_by: "release_date",
                        type: 'DESC'
                    }]} setMovies={setSortedMovies} movies={sortedMovise} selectValue={selectValue} setSelectValue={setSelectValue} />
                </div>

                <div className="col-10">
                    <MoviesList setSelectValue={setSelectValue} page={page} movies={sortedMovise} />
                </div>
            </BootstrapBlockWrap>
        </PageWrap>
    )
}

export default MoviesPage;
