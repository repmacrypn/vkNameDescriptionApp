import { useAppSelector } from 'src/hooks/useAppHooks'
import { qualities } from 'src/constants/mockResults'
import sign from 'src/assets/sign.png'

import styles from './styles.module.scss'

export const Section = () => {
    const { name } = useAppSelector(state => state.userData.userData)

    const nameLetters = name?.toUpperCase().split('')
    const res = nameLetters?.map((l, i) => {
        // вычисляем рандомный цвет элемента
        const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()

        return (
            <div style={{ color: randomColor }} className={styles.curName} key={i}>
                <span className={styles.firstLetter}>{l} -{' '}</span>
                {qualities[l] ?
                    //подставляем под каждую букву введенного имени захардкоженное случайное существительное
                    //и приписываем рандомное количество процентов
                    <span>
                        {qualities[l][Math.floor(Math.random() * qualities[l]?.length)]}:{' '}
                        {Math.floor(Math.random() * 101) + '%'}
                    </span> :
                    l === ' ' ?
                        <span >Упс... Случайно введен пробел</span> :
                        <span>Ничего не нашлось...</span>}
            </div>
        )
    },
    )

    return (
        <section className={styles.data}>
            <div className={styles.name}>
                {name?.toUpperCase()}
            </div>
            <div className={styles.content}>
                {res?.length ? res : 'Вы забыли ввести имя!'}
            </div>
            <img className={styles.sign} width={200} alt='sign' src={sign} />
        </section>
    )
}