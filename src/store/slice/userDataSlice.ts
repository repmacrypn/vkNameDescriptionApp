import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IInitialState } from './interface'
import { IUserData } from 'src/types/userData'

const initialState: IInitialState = {
    userData: {
        zodiac: null,
        name: null,
    },
}

export const counterSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        saveUserData: (state, action: PayloadAction<IUserData>) => {
            state.userData = action.payload
        },
    },
})

export const { saveUserData } = counterSlice.actions

export default counterSlice.reducer