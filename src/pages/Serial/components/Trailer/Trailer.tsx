import { FC, useState } from 'react';
import styles from  './Trailer.module.scss';
import Pagination from 'components/Pagination/Pagination';
import noVideo from 'assets/images/noVideo.jpg';
import { SerialVideos } from 'types/Serial';

interface TrailerProps {
    url: SerialVideos[] | undefined
}

const Trailer: FC<TrailerProps> = ({ url }) => {    
    const [activeTrailer, setActiveTrailer] = useState<number>(0);
    const paginationLength = url?.length || 0;

    return(
        <div className={styles.trailer}>
            <p className={styles.title}>Видеоролики</p>

            <div className={styles.list}>
                {
                    paginationLength === 0 && 
                    <div className={styles.trailer_empty}>
                        <img src={noVideo} alt="noVideo" />
                    </div>
                }

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
