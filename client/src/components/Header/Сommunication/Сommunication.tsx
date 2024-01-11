import React from 'react';
import styles from './Сommunication.module.scss'
import {useAppSelector} from "../../../hook";
import {NavigationList} from "../../../types";
import Tooltip from '@mui/material/Tooltip';

const Communication = () => {
    const loading = useAppSelector(state => state.auth.loading)
const iconList: NavigationList[] = [
    {id:1,path:'/header/communication/mail.svg', name:'mail', dataTitle:"Mail"},
    {id:2,path:'/header/communication/message-circle.svg', name:'message', dataTitle:"Message"},
    {id:3,path:'/header/communication/plus-circle.svg', name:'plus', dataTitle:"Plus"}
]
    return (
        <>
            {loading &&
                <ul className={styles.Communication}>
                    {iconList.map(item => (
                        <li className={styles.CommunicationList} key={item.id}>
                            <Tooltip title={item.dataTitle}>
                                <img className={styles.CommunicationListImage} src={item.path} alt={item.name}/>
                            </Tooltip>

                        </li>

                    ))}
                </ul>

            }
        </>
    );
};

export default Communication;