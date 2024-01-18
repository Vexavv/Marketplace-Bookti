import React from 'react';
import styles from './HowWork.module.scss'
import Container from "../../../uiComponent/Container/Container";
import HTag from "../../../uiComponent/HTag/HTag";
import {useTranslation} from "react-i18next";
import {List} from "../../../types";

const HowWork = () => {
    const {t} = useTranslation('home')
    const stepList: List[] = [
        {icon: "/home/first-step.svg", title: t('HowWork.List.first')},
        {icon: "/home/second-step.svg", title: t('HowWork.List.second')},
        {icon: "/home/fourth-step.svg", title: t('HowWork.List.fourth')},
        {icon: "/home/third-step.svg", title: t('HowWork.List.third')},
    ]
    return (
        <>
            <div className={styles.Title}>
                    <div className={styles.TitleContainer}>
                        <HTag tag='h2'>{t('HowWork.title')}</HTag>
                    </div>
            </div>
            <Container>
                <div className={styles.Wrapper}>
                <ul className={styles.WrapperList}>
                        {stepList.map(item => (
                            <li className={styles.WrapperListItem} key={item.title}>
                                <img src={item.icon} alt="icon"/>
                                <p className={styles.WrapperListItemText}>{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>


            </Container>


        </>

    );
};

export default HowWork;