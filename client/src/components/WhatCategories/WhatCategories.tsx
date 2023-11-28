import React from 'react';
import styles from './WhatCategories.module.scss'
import {useTranslation} from "react-i18next";
import {List} from "../../types";
import Container from "../Container/Container";
import HTag from "../HTag/HTag";

const WhatCategories = () => {
    const {t} = useTranslation('home')
    const categoriesList: List[] = [
        {icon: "/home/categories/first-book.png", title: t('WhatCategories.List.first')},
        {icon: "/home/categories/second-book.png", title: t('WhatCategories.List.second')},
        {icon: "/home/categories/third-book.png", title: t('WhatCategories.List.third')},
        {icon: "/home/categories/fourth-book.png", title: t('WhatCategories.List.fourth')},
    ]
    return (
        <Container>
            <div>
                <div>
                    <HTag tag='h2'>{t('WhatCategories.title')}</HTag>
                </div>
                <p>{t('WhatCategories.text')}</p>
                <ul>
                    {categoriesList.map(item => (
                        <li key={item.title}>
                            <img src={item.icon} alt="book"/>
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </Container>

    );
};

export default WhatCategories;