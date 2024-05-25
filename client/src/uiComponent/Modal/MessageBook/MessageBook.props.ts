import {IBook} from "../../../store/slices/profileSlice/profileSliceTypes";

export interface MessageBookProps{

        imageUrl:string | null,
        title: string,
        author:string,
        language:string,
        publicationYear:string,
        genre: string;


}