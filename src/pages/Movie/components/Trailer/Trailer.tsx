import { FC, useState } from 'react';
import styles from  './Trailer.module.scss';
import Pagination from 'components/Pagination/Pagination';
import { MovieVideos } from 'types/Movie';

interface TrailerProps {
    url: MovieVideos[] | undefined
}

const Trailer: FC<TrailerProps> = ({ url }) => {    
    const [activeTrailer, setActiveTrailer] = useState<number>(0);
    const paginationLength = url?.length || 0;

    return(
        <div className={styles.trailer}>
            <p className={styles.title}>Видеоролики</p>


            <div className={styles.list}>
                {
                    url?.map((item, index) => {
                        const url = `https://www.youtube-nocookie.com/embed/${item.key}?controls=0`;
                        
                        return (
                            <div className={`${styles.trailer_item} ${activeTrailer === index ? styles.trailer_itemactive : ''}`} key={index}>
                                <iframe src={url} title={item.name} allowFullScreen /> 
                            </div>
                        )
                    })
                }    
            </div>    

            <Pagination paginationLimit={5} paginationCount={paginationLength} activeNum={activeTrailer} setActiveNum={setActiveTrailer} />
        </div>
    )
}

export default Trailer;
