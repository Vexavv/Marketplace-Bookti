import React from "react";

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
    avatar_url?: string,
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
}