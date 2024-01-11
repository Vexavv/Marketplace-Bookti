export interface NavigationList {
    id?: number,
    name: string,
    path: string,
    icon?: string,

}
export interface List {
    id?: number,
    icon: string,
    title: string
}

export interface LoginForm{
    name?: string,
    email?:string,
    password?: string,
    confirmPassword?: string,
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