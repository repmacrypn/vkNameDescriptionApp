import { Section } from 'src/components/WinningSection'
import { Background } from 'src/components/Background'
import { Image, Title } from './Common'

import styles from './styles.module.scss'
import { LoadingLayout } from 'src/layout/LoadingLayout'

export const Congrats = () => {
    return (
        <LoadingLayout>
            <div className={styles.congratsWrapper}>
                <Background>
                    <div className={styles.congratsContent}>
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