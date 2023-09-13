import { useAppSelector } from 'src/hooks/useAppHooks'
import { qualities } from 'src/constants/mockResults'

import styles from './styles.module.scss'

export const Section = () => {
    const { name } = useAppSelector(state => state.userData.userData)

    const nameLetters = name?.toUpperCase().split('')
    const res = nameLetters?.map((l, i) =>
        <div className={styles.curName} key={i}>
            {l} -{' '}
            {qualities[l] ?
                //подставляем под каждую букву введенного имени захардкоженное случайное существительное
                //и приписываем рандомное количество процентов
                <span>
                    {qualities[l][Math.floor(Math.random() * qualities[l]?.length)]}:{' '}
                    {Math.floor(Math.random() * 101) + '%'}
                </span> :
                'ничего не нашлось...'}
        </div>,
    )

    return (
        <section className={styles.data}>
            <div className={styles.name}>
                {name?.toUpperCase()}
            </div>
            <div className={styles.content}>
                {res?.length ? res : 'Вы забыли ввести имя!'}
            </div>
        </section>
    )
}