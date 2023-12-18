
export interface UserImageProps{
    picture:string | {data: {
            url: string;
        };} | undefined
    name:string
    text:string
    button: string
    onClick?: () => void
    nav?:boolean
}