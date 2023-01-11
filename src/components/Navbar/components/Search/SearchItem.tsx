import { FC} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SearchItem.module.scss';

interface SearchItemProps {
    link: string
    imgSrc: string
    name: string
    type: string
}

const SearchItem: FC<SearchItemProps> = ({ name, type, imgSrc, link }) => {    
    return(
        <NavLink className={styles.item} to={link}>
            <img className={styles.img} src={imgSrc} alt={name} /> 

            <div className={styles.info}>
                <p className={styles.title}>{name}</p>
                <p className={styles.type}>{type}</p>
            </div>                                       
        </NavLink>
    )
}

export default SearchItem;
