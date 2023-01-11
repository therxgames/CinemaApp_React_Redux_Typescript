import { FC, Dispatch, SetStateAction } from 'react';
import styles from  './Pagination.module.scss';

interface PaginationProps {
    paginationCount: number
    paginationLimit?: number
    activeNum: number
    setActiveNum: Dispatch<SetStateAction<number>>
}

const Pagination: FC<PaginationProps> = ({ paginationCount, activeNum, setActiveNum, paginationLimit }) => {     
    if (paginationCount <= 1) {
        return null;
    }
    
    return(
        <div className={styles.pagination}>
            { 
                [...Array(paginationCount)].map((item, index) => {
                    if (paginationLimit && index > paginationLimit) {
                        return false;
                    }

                    return (
                        <div className={`${styles.pagination__item} ${activeNum === index ? styles.active : ''}`} onClick={() => setActiveNum(index)} key={index}>
                            {index + 1}
                        </div>
                    )
                })
            }
        </div>  
    )
}

export default Pagination;
