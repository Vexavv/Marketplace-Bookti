export type ImageType = null | undefined | File;

export interface IFormFilds {
    title: string;
    author: string;
    genre: string;
    publicationYear: string;
    language: string;
    tradeFormat: string;
    description: string;
    image: ImageType;
}
