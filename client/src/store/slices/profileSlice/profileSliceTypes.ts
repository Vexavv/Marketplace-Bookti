export interface IResData {
    content: IBook[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface IBook {
    id: number;
    title: string;
    author: string;
    genre: string;
    language: string;
    description: string;
    publicationYear: string;
    tradeFormat: string;
    imageUrl: string | null;
    userId: string | null;
}

interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface IInitialState {
    status: 'success' | 'loading' | 'error' | '';
    data: IResData | null;
}
