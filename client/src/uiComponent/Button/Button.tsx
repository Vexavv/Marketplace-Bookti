import React from 'react';
import styles from './Button.module.scss';
import {ButtonProps} from './Button.props';
import cn from 'classnames';

const Button = ({name, children, className, ...props}: ButtonProps) => {
    return (
        <button
            className={cn(styles.Button, className, {
                [styles.HeaderButton]: name == 'HeaderButton',
                [styles.MobileMenu]: name == 'MobileMenu',
                [styles.BannerButton]: name == 'BannerButton',
                [styles.SearchButton]: name == 'SearchButton',
                [styles.UserButton]: name == 'UserButton',
                [styles.ResetPasswordButton]: name == 'ResetPasswordButton',
                [styles.BookshelfEdit]: name == 'BookshelfEdit',
                [styles.BookshelfExchange]: name == 'BookshelfExchange',
                [styles.BookshelfAdd]: name == 'BookshelfAdd',
                [styles.AddBook]: name == 'AddBook',
                [styles.SeparateExchange]: name == 'SeparateExchange',
                [styles.SubscriptionUser]: name == 'SubscriptionUser'
            })}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
