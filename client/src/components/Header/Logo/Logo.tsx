import React from 'react';
import styles from './Logo.module.scss'
import {Link} from "react-router-dom";
import cn from 'classnames'
interface Logo {
    mobile?: boolean
}
const Logo: React.FC<Logo>  = ({mobile}) => {
    return (
        <>
            <img className={ mobile ? styles.LogoMobile:styles.Logo} src="/header/Logo.png"
                              alt="Logo"/>
        </>
    );
};

export default Logo;