export interface NavigationList {
    name: string,
    path: string,
    icon?: string
}
export interface List {
    id?: number,
    icon: string,
    title: string
}

export interface LoginForm{
    email:string,
    password: string
}