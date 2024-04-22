export interface NavigationList {
    id?: number,
    name: string,
    path: string,
    icon?: string,

}
export interface List {
    id?: number,
    icon: string,
    title: string | undefined
}

export interface LoginForm{
    name?: string,
    email?:string,
    city?:string,
    password?: string,
    confirm_password?: string,
    new_password?: string,
    checkboxField?: boolean

}
export interface CommunicationList{
    id: number,
    name: string,
    path: string,
    title?: string,
    myFunction?: () => void;
    link:string
}
export interface Tab {
    id: number;
    label: string;
    content: React.ReactElement;
}

export interface FieldSettings {
    id: number
    label_text: string
    name: string
    type?:string
    component?:React.ReactElement
}
export interface User {
    id?:number
    email: string;
    full_name: string;
    avatar_url: string;
    location:string;
    telegram_id?:string;
    display_email?:boolean,
    display_telegram?:boolean,
    wishlist?: {
        size:number
        items:[{
            id:number,
        }]
    },
    books?:{
        size:number
        items:[{
            id:number,
            image_url:string
            language:string
            title:string
            author:string
        }]
    }
}