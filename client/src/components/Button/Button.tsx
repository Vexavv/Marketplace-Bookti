import React from 'react';
import styles from './Button.module.scss'
import{ButtonProps} from './Button.props'
import cn from 'classnames'
const Button = ({name, children, className, ...props}: ButtonProps) => {
    return (
        <button className={cn(styles.Button,className,{
            [styles.MobileMenu]: name == 'MobileMenu'
        })} {...props}>
            {children}
        </button>
    );
};

export default Button;