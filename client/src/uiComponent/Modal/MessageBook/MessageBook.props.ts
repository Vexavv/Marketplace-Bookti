import {IBook} from "../../../store/slices/profileSlice/profileSliceTypes";

export interface MessageBookProps{

        image_url:string | null,
        title: string,
        author:string,
        language:string,
        publication_date:string,
        genre: string;


}