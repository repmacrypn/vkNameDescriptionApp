import { Pages } from 'src/pages'

import styles from './styles.module.scss'

export const App = () => {
    return (
        <div className={styles.appWrapper}>
            <Pages />
        </div>
    )
}