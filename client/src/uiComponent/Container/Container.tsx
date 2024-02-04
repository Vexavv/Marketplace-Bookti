import React, { BlockquoteHTMLAttributes, FC, ReactNode } from 'react';
import styles from './Container.module.scss';

interface IContainerProps extends BlockquoteHTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children, ...restProps }) => {
    return (
        <div className={styles.Container} {...restProps}>
            {children}
        </div>
    );
};

export default Container;
