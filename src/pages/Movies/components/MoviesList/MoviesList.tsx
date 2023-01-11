import { Dispatch, FC, SetStateAction } from 'react';
import { fetchMovies } from 'store/action-creators/movies';
import { dispatchStore } from 'hooks/dispatchStore';
import { IMG_220_330_URL } from 'const/imageUrl';
import Card from 'components/Card/Card';
import noFilmImage from 'assets/images/noFilmImage.jpg';
import styles from './MoviesList.module.scss';
import { Movie } from 'types/Movie';
import LoadMore from 'components/LoadMore/LoadMore';

interface MoviesListProps {
    movies: Movie[]
    page:   number
    setSelectValue: Dispatch<SetStateAction<string>>
}

const MoviesList: FC<MoviesListProps> = ({ movies, page, setSelectValue }) => {    

    const loadMore = (): void => {
        dispatchStore(fetchMovies(page));
        setSelectValue('default');
    }

    return(
        <div className={styles.list}>
            {
                movies.map((item, index) => {
                    const { id, backdrop_path, title, release_date } = item;
                    const imgUrl = backdrop_path ? (IMG_220_330_URL + backdrop_path) : noFilmImage;

                    return <Card key={id + index} img_url={imgUrl} title={title} date={release_date} link={`/movies/${id}`} />
                })
            }

            <LoadMore onClick={loadMore} />
        </div>
    )
}

export default MoviesList;
