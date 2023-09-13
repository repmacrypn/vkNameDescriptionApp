export interface INavButton {
    text: string;
    callBack?: () => void;
    className: string;
    to: 'main' | 'congratulations';
}