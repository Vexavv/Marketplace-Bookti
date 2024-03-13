export type ImageType = null | undefined | File;

export interface IFormFilds {
    title: string;
    author: string;
    genre: string;
    publication_date: string;
    language: string;
    trade_format: string;
    description: string;
    image: ImageType;
}
