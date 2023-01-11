import { ChangeEvent, useState, Dispatch, SetStateAction } from 'react';
import Select from 'components/UI/Select/Select';
import { SortOption } from 'types/SortOption';
import { sortArrObj } from 'helpers/helpers';

interface SortProps<T> {
    selectValue: string
    setSelectValue: Dispatch<SetStateAction<string>>
    data:    T[]
    setData: Dispatch<SetStateAction<T[]>>
    options: SortOption[]
}

export default function Sort<T>({ data, setData, options, selectValue, setSelectValue }: SortProps<T>) {  

    const sortData = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target; 
        const option = options.find(item => item.value === value);

        if (!option) {
            return false;
        }

        setSelectValue(value);
        setData(sortArrObj([...data], option.sort_by, option.type));
    }
    

    return(
        <div className="sidebar">
            <Select defaultOption={true} defaultText="Sort by" value={selectValue} options={options} onChange={sortData} />
        </div>
    )
}
