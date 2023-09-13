import { configureStore } from '@reduxjs/toolkit'

import userDataSlice from './slice/userDataSlice'

export const store = configureStore({
    reducer: {
        userData: userDataSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch