import { ReactNode } from 'react'

export interface ISelect {
    children: ReactNode;
    label: string;
    value: string;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}