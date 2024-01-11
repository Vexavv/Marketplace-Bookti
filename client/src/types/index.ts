export interface NavigationList {
    name: string,
    path: string,
    icon?: string,
    id?: number,
    dataTitle?: string
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