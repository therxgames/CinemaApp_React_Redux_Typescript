import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

interface CardProps {
    img_url: string
    title:   string
    date?:   string
    link:    string
}

interface CardStyleProps {
    img_height?: number
    img_width?: number
    card_height?: number
    card_width?: number
}

const Card: FC<CardProps & CardStyleProps> = ({ link, img_url, title, date, img_height, img_width, card_height, card_width }) => {   

    return(
        <div className={styles.main} style={{
            height: card_height,
            width: card_width
        }}>
            <Link to={link}>
                <img className={styles.img} src={img_url} alt={title} style={{
                    height: img_height,
                    width: img_width
                }}  />

                <div className={styles.content}>
                    <span className={styles.title}>{title}</span>
                    <p className={styles.date}>{date}.</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;
