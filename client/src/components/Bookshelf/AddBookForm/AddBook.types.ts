export type ImageType = null | undefined | File;

export interface IFormFilds {
    image: ImageType;
    title: string;
    author: string;
    genre: string;
    date: string;
    language: string;
    exchange: string;
    textarea: string;
}
