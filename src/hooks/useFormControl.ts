import { useState } from 'react'

import { useAppDispatch } from './useAppHooks'
import { saveUserData } from 'src/store/slice/userDataSlice'

import { IFormControlResult } from 'src/components/Form/interface'

export const useFormControl = (): IFormControlResult => {
    const [zodiacValue, setZodiacValue] = useState('Близнецы')
    const [nameValue, setNameValue] = useState('')

    const dispatch = useAppDispatch()

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setNameValue(e.currentTarget.value)
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setZodiacValue(e.target.value)
    }

    const handleButtonClick = () => {
        dispatch(saveUserData({ zodiac: zodiacValue, name: nameValue }))
    }

    return {
        zodiacValue,
        nameValue,
        handleInputChange,
        handleSelectChange,
        handleButtonClick,
    }
}