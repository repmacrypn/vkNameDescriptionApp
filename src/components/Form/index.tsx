import { sex } from 'src/constants/sexList'
import { useFormControl } from 'src/hooks/useFormControl'

import { NavButton } from '../NavButton'
import { Select } from '../Select'
import { Input } from '../Input'

import styles from './styles.module.scss'

export const Form = () => {
    const {
        zodiacValue,
        nameValue,
        handleInputChange,
        handleSelectChange,
        handleButtonClick,
    } = useFormControl()

    return (
        <section className={styles.formWrapper}>
            <form className={styles.form}>
                <Input
                    value={nameValue}
                    handleInputChange={handleInputChange}
                    placeholder='Имя...'
                    label='Введи нужное имя:'
                />
                <Select
                    value={zodiacValue}
                    handleSelectChange={handleSelectChange}
                    label='Выбери свой пол:'
                >
                    {sex.map(s => <option key={s.id}>{s.value}</option>)}
                </Select>
            </form>
            <NavButton
                className='greetings'
                text='Рассчитаем!'
                callBack={handleButtonClick}
                to='congratulations'
            />
        </section>
    )
}