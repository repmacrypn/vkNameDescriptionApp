import { ReactNode } from 'react'

import logo from 'src/assets/logo.webp'

import styles from './styles.module.scss'

export const Image = () => {
    return (
        <div className={styles.logo}>
            <img width={96} alt='logo' src={logo} />
        </div>
    )
}

export const Title = ({ children }: { children: ReactNode }) => {
    return (
        <header className={styles.title}>
            {children}
        </header>
    )
}

export const Name = ({ name }: { name: string }) => {
    return (
        <div className={styles.name}>
            {name}{' '}
        </div>
    )
}