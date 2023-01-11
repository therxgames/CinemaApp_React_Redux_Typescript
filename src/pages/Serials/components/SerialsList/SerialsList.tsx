import { Dispatch, FC, SetStateAction } from 'react';
import { dispatchStore } from 'hooks/dispatchStore';
import styles from './SerialsList.module.scss';
import Card from 'components/Card/Card';
import { IMG_220_330_URL } from 'const/imageUrl';
import noFilmImage from 'assets/images/noFilmImage.jpg';
import { fetchSerials } from 'store/action-creators/serials';
import { Serial } from "types/Serial";
import LoadMore from 'components/LoadMore/LoadMore';

interface SeriesListProps {
    serials: Serial[]
    page:  number
    setSelectValue: Dispatch<SetStateAction<string>>
}

const SerialsList: FC<SeriesListProps> = ({ serials, page, setSelectValue }) => {    

    const loadMore = (): void => {
        dispatchStore(fetchSerials(page));
        setSelectValue('default');
    }


    return(
        <div className={styles.list}>
            {
                serials.map((item, index) => {
                    const { id, backdrop_path, name, first_air_date } = item;

                    const imgUrl = backdrop_path ? (IMG_220_330_URL + backdrop_path) : noFilmImage;

                    return <Card key={id + index} img_url={imgUrl} title={name} date={first_air_date} link={`/serials/${id}`} />
                })
            }

            <LoadMore onClick={loadMore} />
        </div>
    )
}

export default SerialsList;
