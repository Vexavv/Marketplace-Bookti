import React from 'react';
import styles from './WhatCategories.module.scss'
import {useTranslation} from "react-i18next";
import {NavigationList} from "../../types";
import Container from "../Container/Container";
import HTag from "../HTag/HTag";
import {Link} from "react-router-dom";
import cn from "classnames";

const WhatCategories = () => {
    const {t} = useTranslation('home')
    const categoriesList: NavigationList[] = [
        {icon: "/home/categories/first-book.png", name: t('WhatCategories.List.first'),path:"#"},
        {icon: "/home/categories/second-book.png", name: t('WhatCategories.List.second'),path:"#"},
        {icon: "/home/categories/third-book.png", name: t('WhatCategories.List.third'),path:"#"},
        {icon: "/home/categories/fourth-book.png", name: t('WhatCategories.List.fourth'),path:"#"},
    ]
    return (
        <Container>
            <div className={styles.Wrapper}>
                <div className={styles.WrapperTitle}>
                    <HTag tag='h2'>{t('WhatCategories.title')}</HTag>
                </div>
                <p className={styles.WrapperText}>{t('WhatCategories.text')}</p>
                <Link className={cn(styles.WrapperLink,styles.WrapperBigLink)} to='/library'>{t('WhatCategories.link')}</Link>
                <ul className={styles.WrapperList}>
                    {categoriesList.map(item => (
                        <li className={styles.WrapperListItem} key={item.name}>
                            <img src={item.icon} alt="book"/>
                           <Link to={item.path}><p className={styles.WrapperListItemName}>{item.name}</p></Link>
                        </li>
                    ))}
                </ul>
                <Link className={cn(styles.WrapperLink,styles.WrapperDisableLink)} to='/library'>{t('WhatCategories.link')}</Link>
            </div>
        </Container>

    );
};

export default WhatCategories;