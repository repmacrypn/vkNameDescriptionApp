import loader from 'src/assets/loader.svg'

import styles from './styles.module.scss'

export const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <img alt='Loader' src={loader} />
        </div>
    )
}