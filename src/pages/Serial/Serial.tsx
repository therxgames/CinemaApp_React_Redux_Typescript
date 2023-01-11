import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrap } from 'hoc/PageWrap';
import { dispatchStore } from 'hooks/dispatchStore';
import { useTypedSelector } from 'hooks/useTypedSelector';
import styles from  './Serial.module.scss';
import Poster from './components/Poster/Poster';
import About from './components/About/About';
import Cast from './components/Cast/Cast';
import Trailer from './components/Trailer/Trailer';
import Loader from 'components/Loader/Loader';
import { BootstrapBlockWrap } from 'hoc/BootstrapBlockWrap';
import errorPage from 'assets/images/errorPage.jpg';
import { fetchSerial } from 'store/action-creators/serial';


const Serial: FC = () => {    
    const { id } = useParams<string>();
    const { serial, loading, error } = useTypedSelector(state => state.serial);

    useEffect(() => {
        dispatchStore(fetchSerial(Number(id)));
    }, [id]);
    
    if (loading) {
        return (
            <PageWrap contentClass={styles.loading}>
                <Loader />
            </PageWrap>
        )
    }

    if (error) {
        return (
            <PageWrap contentClass={styles.error}>
                <div className="error_page">
                    <img src={errorPage} alt="Ошибка" />
                </div>
            </PageWrap>
        )  
    }

    return(
       <PageWrap contentClass={styles.film}>
            <BootstrapBlockWrap contentClass={styles.info}>
                <div className="col-3">
                    <Poster serial={serial} />
                </div>                

                <div className="col-9">
                    <About serial={serial} />
                </div>
            </BootstrapBlockWrap>

            <BootstrapBlockWrap contentClass={styles.cast}>
                <div className="col-12">
                    <Cast serial={serial} />
                </div>   
            </BootstrapBlockWrap>

            <BootstrapBlockWrap contentClass={styles.trailer}>
                <div className="col-12">
                    <Trailer url={serial?.videos.results} />
                </div>   
            </BootstrapBlockWrap>
       </PageWrap>
    )
}

export default Serial;
