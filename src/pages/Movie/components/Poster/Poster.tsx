import { FC } from 'react';
import styles from  './Poster.module.scss';
import { IMG_300_450_URL } from 'const/imageUrl';
import noFilmImage from 'assets/images/noFilmImage.jpg';
import { Movie } from 'types/Movie';

interface PosterProps {
    movie: Movie | null
}

const Poster: FC<PosterProps> = ({ movie }) => {    
    const imgUrl = movie?.backdrop_path ? (IMG_300_450_URL + movie.backdrop_path) : noFilmImage;

    return(
        <div className={styles.poster}>
            <img className={styles.poster_img} src={imgUrl} alt={movie?.title} />
        </div>
    )
}

export default Poster;
