import React from 'react';
import styles from './SeparatePage.module.scss'
import {useTranslation} from "react-i18next";
import { useNavigate } from 'react-router-dom';
import BookInfo from "../../components/SeparatePageComponent/BookInfo/BookInfo";

const SeparatePage = () => {
    const { t } = useTranslation('login');
    const navigate = useNavigate();
    return (
        <div>
            <button className={styles.WrapperBack} onClick={() => navigate(-1)}>
                <img src="/bookshelf/arrow-back.svg" alt="Back"/>
                <span>{t('arrow')}</span>
            </button>
            <div>
<BookInfo/>

            </div>
            <div>

            </div>
        </div>
    );
};

export default SeparatePage;