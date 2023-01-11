import { PageWrap } from 'hoc/PageWrap';
import { FC, useEffect, useState } from 'react';
import styles from "./Serials.module.scss";
import { BootstrapBlockWrap } from 'hoc/BootstrapBlockWrap';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { dispatchStore } from 'hooks/dispatchStore';
import Sidebar from './components/Sidebar/Sidebar';
import SeriesList from './components/SerialsList/SerialsList';
import Loader from 'components/Loader/Loader';
import errorPage from 'assets/images/errorPage.jpg';
import { fetchSerials } from 'store/action-creators/serials';
import { Serial } from 'types/Serial';

const Serials: FC = () => {   
    const { serials, page, loading, error } = useTypedSelector(state => state.serials);

    const [sortedSerials, setSortedSerials] = useState<Serial[]>([]);
    const [selectValue, setSelectValue] = useState<string>("default");

    useEffect(() => {
        dispatchStore(fetchSerials());
    }, []);

    useEffect(() => {
        setSortedSerials(serials);
    }, [serials]);

    if (loading && page === 1) {
        return (
            <PageWrap contentClass={styles.film_loading}>
                <Loader />
            </PageWrap>
        )
    }

    if (error) {
        return (
            <PageWrap contentClass={styles.film_error}>
                <div className="error_page">
                    <img src={errorPage} alt="Ошибка" />
                </div>
            </PageWrap>
        )  
    }

    return(
        <PageWrap contentClass={styles.series_page}>
            <BootstrapBlockWrap>
                <div className="col-2">
                    <Sidebar options={[{
                        value: "title_asc", 
                        text: "Name (inc)",
                        sort_by: "name",
                        type: 'ASC'
                    },
                    {
                        value: "title_desc", 
                        text: "Name (dec)",
                        sort_by: "name",
                        type: 'DESC'
                    },
                    {
                        value: "release_date_asc", 
                        text: "Date (inc)",
                        sort_by: "first_air_date",
                        type: 'ASC'
                    },
                    {
                        value: "release_date_desc", 
                        text: "Date (dec)",
                        sort_by: "first_air_date",
                        type: 'DESC'
                    }]} setSerials={setSortedSerials} serials={sortedSerials} selectValue={selectValue} setSelectValue={setSelectValue} />
                </div>

                <div className="col-10">
                    <SeriesList setSelectValue={setSelectValue} page={page} serials={sortedSerials} />
                </div>
            </BootstrapBlockWrap>
        </PageWrap>
    )
}

export default Serials;

