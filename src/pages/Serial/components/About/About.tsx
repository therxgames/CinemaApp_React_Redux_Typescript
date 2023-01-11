import { FC, Fragment } from 'react';
import { Serial } from 'types/Serial';
import styles from  './About.module.scss';

interface AboutProps {
    serial: Serial | null
}

const About: FC<AboutProps> = ({ serial }) => {    
    const filmYear = serial?.first_air_date ? new Date(serial?.first_air_date).getFullYear() : "";
    const countries = serial?.production_countries.map(item => item.name).join(",");
    const genres = serial?.genres.map(item => item.name).join(", ");
    const tagline = serial?.tagline;
    const vote = serial?.vote_average;
    

    const aboutObj = [
        {
            key: "Год производства",
            value: filmYear
        },
        {
            key: "Страна",
            value: countries
        },
        {
            key: "Жанр",
            value: genres
        },
        {
            key: "Слоган",
            value: tagline
        },
        {
            key: "Рейтинг",
            value: vote
        },  
    ]

    return (
        <Fragment>
            <div className={styles.main}>
                <div className={styles.title}>
                    <p>{serial?.name} ({filmYear})</p>
                </div>
                <div className={styles.about}>
                    <p className={styles.subtitle}>О фильме</p>

                    <div className={styles.about_list}>
                        {
                            aboutObj.map((item, index) => {
                                return (
                                    <div className={styles.about_item} key={index}>
                                        <div className="row">
                                            <div className="col-4">
                                                <p className={styles.about_item_key}>{item.key}</p>
                                            </div>
                                            <div className="col-8">
                                                <p className={styles.about_item_value}>{item.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={styles.overview}>
                        <p className={styles.subtitle}>Обзор</p>
                        <span>{serial?.overview}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About;
