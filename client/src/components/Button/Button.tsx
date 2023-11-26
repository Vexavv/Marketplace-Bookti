import React from 'react';
import styles from './Button.module.scss'
import{ButtonProps} from './Button.props'
import cn from 'classnames'
const Button = ({name, children, className, ...props}: ButtonProps) => {
    return (
        <button className={cn(styles.Button,className,{
            [styles.HeaderButton]: name == 'HeaderButton',
            [styles.MobileMenu]: name == 'MobileMenu',
            [styles.l]: name == 'l'
        })} {...props}>
            {children}
        </button>
    );
};

export default Button;