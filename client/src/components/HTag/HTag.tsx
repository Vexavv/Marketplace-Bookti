import React from 'react';
import styles from './HTag.module.scss'
import {HTagProps} from "./HTag.props";
import cn from 'classnames'
const HTag = ({tag, children}:HTagProps) => {
    switch (tag){
        case 'h1':
            return <h1 className={styles.h1}>{children}</h1>;
        case 'h2':
            return <h2 className={styles.h2}>{children}</h2>;
        case 'h3':
            return <h3 className={styles.h3}>{children}</h3>;
        case 'h2Grey':
            return <h2 className={cn(styles.h2,styles.h2Grey)}>{children}</h2>;
        case 'h2Black':
            return <h2 className={cn(styles.h2,styles.h2Black)}>{children}</h2>;
        default:
            return <></>
    }
};

export default HTag;