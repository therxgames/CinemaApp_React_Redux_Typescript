import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrap } from 'hoc/PageWrap';
import { dispatchStore } from 'hooks/dispatchStore';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { fetchMovie } from 'store/action-creators/movie';
import styles from  './Movie.module.scss';
import Poster from './components/Poster/Poster';
import About from './components/About/About';
import Cast from './components/Cast/Cast';
import Trailer from './components/Trailer/Trailer';
import Loader from 'components/Loader/Loader';
import { BootstrapBlockWrap } from 'hoc/BootstrapBlockWrap';
import errorPage from 'assets/images/errorPage.jpg';


const Movie: FC = () => {    
    const { id } = useParams<string>();
    const { movie, loading, error } = useTypedSelector(state => state.movie);

    useEffect(() => {
        dispatchStore(fetchMovie(Number(id)));
    }, [id]);
    
    if (loading) {
        return (
            <PageWrap contentClass={styles.film_loading}>
                <Loader />
            </PageWrap>
        )
    }

    if (error) {
        return (
            <PageWrap contentClass={styles.film_error}>
                <div className="error_page">
                    <img src={errorPage} alt="Ошибка" />
                </div>
            </PageWrap>
        )  
    }

    return(
       <PageWrap contentClass={styles.film}>
            <BootstrapBlockWrap contentClass={styles.main_info}>
                <div className="col-3">
                    <Poster movie={movie} />
                </div>                

                <div className="col-9">
                    <About movie={movie} />
                </div>
            </BootstrapBlockWrap>

            <BootstrapBlockWrap contentClass={styles.cast}>
                <div className="col-12">
                    <Cast movie={movie} />
                </div>   
            </BootstrapBlockWrap>

            <BootstrapBlockWrap contentClass={styles.trailer}>
                <div className="col-12">
                    <Trailer url={movie?.videos.results} />
                </div>   
            </BootstrapBlockWrap>
       </PageWrap>
    )
}

export default Movie;
