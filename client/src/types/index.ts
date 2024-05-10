export interface NavigationList {
    id?: number,
    name: string,
    path: string,
    icon?: string,

}
export interface List {
    id?: number,
    icon: string,
    title?: string | undefined
    content?: React.ReactElement;
}

export interface LoginForm{
   fullName?: string,
    email?:string,
    location?:string,
    password?: string,
    confirmPassword?: string,
    newPassword?: string,
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
    creationDate?:string
    email: string;
    fullName: string;
    avatarUrl: string;
    location:string;
    telegramId?:string;
    displayEmail?:boolean,
    displayTelegram?:boolean,
    wishlist?: {
        size:number
        items:[{
            id:number,
            imageUrl:string
            language:string
            title:string
            author:string
        }]
    },
    books?:{
        size:number
        items:[{
            id:number,
            imageUrl:string
            language:string
            title:string
            author:string
        }]
    }
}