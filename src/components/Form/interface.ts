export interface IFormControlResult {
    zodiacValue: string;
    nameValue: string;
    handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleButtonClick: () => void;
}