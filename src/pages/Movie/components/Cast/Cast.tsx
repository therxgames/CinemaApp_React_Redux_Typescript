import { FC } from 'react';
import CastSlider from './CastSlider';
import styles from  './Cast.module.scss';
import { Movie } from 'types/Movie';

interface CastProps {
    movie: Movie | null
}

const Cast: FC<CastProps> = ({ movie }) => {    

    return(
        <div className={styles.main}>
            <p className={styles.title}>Актерский состав</p>

            <CastSlider movie={movie} />
        </div>
    )
}

export default Cast;
