import { FC } from 'react';
import styles from './LoadMore.module.scss';

interface LoadMoreProps {
    onClick: () => void
}

const LoadMore: FC<LoadMoreProps> = ({ onClick }) => {    

    return(
        <div className={styles.load_more}>
            <button className={styles.button} onClick={() => onClick()}>Load More</button>
        </div>
    )
}

export default LoadMore;
