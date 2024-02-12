import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode;
    name?:
        | 'MobileMenu'
        | 'BannerButton'
        | 'HeaderButton'
        | 'SearchButton'
        | 'UserButton'
        | 'ResetPasswordButton'
        | 'BookshelfEdit'
        | 'BookshelfExchange'
        | 'BookshelfAdd'
        | 'AddBook'
        | 'SeparateExchange'
}
