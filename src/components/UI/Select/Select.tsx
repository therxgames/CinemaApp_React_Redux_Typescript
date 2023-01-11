import { FC, ChangeEvent } from 'react';
import styles from  "./Select.module.scss";

interface SelectProps {
    value:  string
    options: any[]
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
    defaultOption?: boolean
    defaultText?: string
}

const Select: FC<SelectProps> = ({ options, onChange, value, defaultOption, defaultText }) => {    

    return(
        <select className="form-select" id={styles.select} onChange={(e) => onChange(e)} value={value}>
            {
                defaultOption && <option value='default' disabled={true}>{defaultText}</option>
            }
            {
                options.map((item, index) => {
                    return <option key={index} disabled={item.disabled} value={item.value}>{item.text}</option>
                })
            }
        </select>
    )
}

export default Select;
