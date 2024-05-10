export type ImageType = null | undefined | File;

export interface IFormFilds {
    title: string;
    author: string;
    genre: string;
    publicationYear: number | string
    language: string;
    exchangeFormat: string;
    description: string;
    image: ImageType;
}
