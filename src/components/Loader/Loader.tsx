import { FC } from 'react';
import styles from "./Loader.module.scss";

const Loader: FC = () => {    

    return (
        <div className={styles.loader}>
            <div className={styles.loader_ring}></div>
        </div>
    )
}

export default Loader;
