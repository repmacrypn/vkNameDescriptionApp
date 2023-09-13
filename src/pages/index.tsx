import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Loader } from 'src/components/Loader'
import { Welcome } from './Welcome'
import { PageNotFound } from './PageNotFound'
import { Main } from './Main'
import { Congrats } from './Congrats'

export const Pages = () => {
    return (
        <React.Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<Navigate to='/welcome' />} />
                <Route path='/welcome' element={<Welcome />} />
                <Route path='/main' element={<Main />} />
                <Route path='/congratulations' element={<Congrats />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </React.Suspense>
    )
}