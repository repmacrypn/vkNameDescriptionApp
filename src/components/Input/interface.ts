export interface IInput {
    label: string;
    value: string;
    placeholder: string;
    handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}