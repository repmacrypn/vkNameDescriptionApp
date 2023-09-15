import { Section } from 'src/components/WinningSection'
import { Background } from 'src/components/Background'
import { LoadingLayout } from 'src/layout/LoadingLayout'
import e100 from 'src/assets/e100.png'
import { Image, Title } from './Common'

import styles from './styles.module.scss'

export const Congrats = () => {
    return (
        <LoadingLayout>
            <div className={styles.congratsWrapper}>
                <Background>
                    <div className={styles.congratsContent}>
                        <div className={styles.imgWrapper}>
                            <img className={styles.img} width={60} alt='clown' src={e100} />
                            <img className={styles.img} width={60} alt='clown' src={e100} />
                        </div>
                        <Title>
                            РАСШИФРОВКА ИМЕНИ
                        </Title>
                        <Section />
                        <Image />
                    </div>
                </Background>
            </div>
        </LoadingLayout>
    )
}