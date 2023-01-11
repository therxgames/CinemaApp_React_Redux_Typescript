import { FC } from 'react';
import styles from  './Poster.module.scss';
import { IMG_300_450_URL } from 'const/imageUrl';
import noFilmImage from 'assets/images/noFilmImage.jpg';
import { Serial } from 'types/Serial';

interface PosterProps {
    serial: Serial | null
}

const Poster: FC<PosterProps> = ({ serial }) => {    
    const imgUrl = serial?.backdrop_path ? (IMG_300_450_URL + serial.backdrop_path) : noFilmImage;

    return(
        <div className={styles.poster}>
            <img className={styles.poster_img} src={imgUrl} alt={serial?.title} />
        </div>
    )
}

export default Poster;
