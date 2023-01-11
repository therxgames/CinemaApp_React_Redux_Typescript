import { FC, Dispatch, SetStateAction } from 'react';
import { Movie } from 'types/Movie';
import Sort from 'components/Sort/Sort';
import { SortOption } from 'types/SortOption';
import styles from './Sidebar.module.scss';

interface SideBarProps {
    movies:         Movie[]
    setMovies:      Dispatch<SetStateAction<Movie[]>>
    options:        SortOption[]
    selectValue: string
    setSelectValue: Dispatch<SetStateAction<string>>
}

const Sidebar: FC<SideBarProps> = ({ options, movies, setMovies, selectValue, setSelectValue }) => {    

    return(
        <div className={styles.sidebar}>
            <Sort selectValue={selectValue} setSelectValue={setSelectValue} setData={setMovies} options={options} data={movies} />
        </div>
    )
}

export default Sidebar;
