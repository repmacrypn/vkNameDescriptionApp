import { ReactNode, useEffect, useState } from 'react'
import { Loader } from 'src/components/Loader'

export const LoadingLayout = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timerId = setTimeout(() => setIsLoading(false), 2000)

        return () => clearTimeout(timerId)
    }, [])

    if (isLoading) return <Loader />

    return <>{children}</>
}