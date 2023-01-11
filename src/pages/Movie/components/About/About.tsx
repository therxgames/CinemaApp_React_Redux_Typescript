import { FC, useEffect, Fragment } from 'react';
import styles from  './About.module.scss';
import { Movie } from 'types/Movie';

interface AboutProps {
    movie: Movie | null
}

const About: FC<AboutProps> = ({ movie }) => {    
    const year = movie?.release_date ? new Date(movie?.release_date).getFullYear() : "";
    const countries = movie?.production_countries.map(item => item.name).join(",");
    const genres = movie?.genres.map(item => item.name).join(", ");
    const tagline = movie?.tagline;
    const vote = movie?.vote_average;
    

    const aboutObj = [
        {
            key: "Год производства",
            value: year
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
                    <p>{movie?.title} ({year})</p>
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
                        <span>{movie?.overview}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About;
