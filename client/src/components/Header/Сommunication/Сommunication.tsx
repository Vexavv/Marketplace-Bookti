import React from 'react';
import styles from './Сommunication.module.scss'
import {useAppDispatch, useAppSelector} from "../../../hook";
import {CommunicationList, NavigationList} from "../../../types";
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';
import {useTranslation} from "react-i18next";
import {openModal} from "../../../store/slices/modalSlice";
import {Link} from "react-router-dom";

const Communication = () => {
    const {t} = useTranslation('header')
    const loading = useAppSelector(state => state.auth.loading)
    const dispatch = useAppDispatch()

    const handleOpenModal = (item: NavigationList) => {
        if (item.id === 3) {
            dispatch(openModal({type: 'addBook', props: {key: 'value'}}));
        }
    }
    const iconList: CommunicationList[] = [
        {
            id: 1,
            path: '/header/communication/mail.svg',
            name: 'mail',
            title: t('Communication.message'),
            link: "/message"
        },
        {
            id: 2,
            path: '/header/communication/message-circle.svg',
            name: 'message',
            title: t('Communication.chat'),
            link: "/chat"
        },
        {
            id: 3,
            path: '/header/communication/add_book.png',
            name: 'plus',
            title: t("Communication.addBook"),
            link: "",
            myFunction: () => {
            }
        }
    ]

    const MyTooltip = styled(({className, ...props}: TooltipProps) => (
        <Tooltip {...props} arrow classes={{popper: className}}/>
    ))(({theme}) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: '#447B57',
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#447B57',
            color: '#fff',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }));
    return (
        <>
            {loading &&
                <ul className={styles.Communication}>
                    {iconList.map(item => (
                        <li className={styles.CommunicationList} key={item.id}>
                            <MyTooltip title={item.title}>
                                <Link to={item.link}>
                                    <img className={styles.CommunicationListImage} src={item.path} alt={item.name}
                                         onClick={() => handleOpenModal(item)}/>
                                </Link>
                            </MyTooltip>
                        </li>

                    ))}
                </ul>

            }
        </>
    );
};

export default Communication;