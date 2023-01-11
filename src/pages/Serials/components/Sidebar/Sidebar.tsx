import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './Sidebar.module.scss';
import { Serial } from 'types/Serial';
import { SortOption } from 'types/SortOption';
import Sort from 'components/Sort/Sort';

interface SideBarProps {
    serials:        Serial[]
    setSerials:     Dispatch<SetStateAction<Serial[]>>
    options:        SortOption[]
    selectValue:    string
    setSelectValue: Dispatch<SetStateAction<string>>
}

const Sidebar: FC<SideBarProps> = ({ options, serials, setSerials, selectValue, setSelectValue }) => {    

    return(
        <div className={styles.sidebar}>
            <Sort selectValue={selectValue} setSelectValue={setSelectValue} setData={setSerials} options={options} data={serials} />
        </div>
    )
}

export default Sidebar;
