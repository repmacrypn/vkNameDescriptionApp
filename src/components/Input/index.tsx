import { memo } from 'react'

import styles from './styles.module.scss'

import { IInput } from './interface'

export const Input = memo(({ label, value, handleInputChange, placeholder }: IInput) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                placeholder={placeholder}
                type='text'
                value={value}
                onChange={handleInputChange}
            />
        </div>
    )
})