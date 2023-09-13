import { memo } from 'react'

import styles from './styles.module.scss'

import { ISelect } from './interface'

export const Select = memo(({ children, label, value, handleSelectChange }: ISelect) => {
    return (
        <label className={styles.label}>
            <div>{label}</div>
            <select
                value={value}
                onChange={handleSelectChange}
                className={styles.select}
            >
                {children}
            </select>
        </label>
    )
})