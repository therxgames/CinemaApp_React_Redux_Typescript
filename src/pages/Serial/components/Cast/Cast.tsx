import { FC } from 'react';
import CastSlider from './CastSlider';
import styles from  './Cast.module.scss';
import { Serial } from 'types/Serial';

interface CastProps {
    serial: Serial | null
}

const Cast: FC<CastProps> = ({ serial }) => {    

    return(
        <div className={styles.main}>
            <p className={styles.title}>Актерский состав</p>

            <CastSlider serial={serial} />
        </div>
    )
}

export default Cast;
