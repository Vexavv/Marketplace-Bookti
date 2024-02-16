import React from 'react';
import styles from './SeparatePage.module.scss'
import {useTranslation} from "react-i18next";
import {useNavigate} from 'react-router-dom';
import BookInfo from "../../components/SeparatePageComponent/BookInfo/BookInfo";
import UserInformation from "../../components/SeparatePageComponent/UserInformation/UserInformation";
import Container from "../../uiComponent/Container/Container";
import {useAppSelector} from "../../hook";

const SeparatePage = () => {
    const {t} = useTranslation(['separatePage', 'login']);
    const { user } = useAppSelector(state => state.auth);
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <div className={styles.Wrapper}>
                    <button className={styles.WrapperBack} onClick={() => navigate(-1)}>
                        <img src="/bookshelf/arrow-back.svg" alt="Back"/>
                        <span>{t('login:arrow')}</span>
                    </button>
                    <div className={styles.WrapperContent}>
                        <BookInfo/>
                        <UserInformation user={user}/>
                    </div>
                    <div className={styles.WrapperDescription}>
                        <h3 className={styles.WrapperDescriptionTitle}>{t('separatePage:Title')}</h3>
                        <p className={styles.WrapperDescriptionText} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis debitis ipsa
                            quidem
                            tenetur. Aliquam consequuntur corporis cupiditate deleniti ea est id, laboriosam omnis,
                            praesentium
                            quos sapiente vitae voluptatum! A ad aspernatur atque corporis dignissimos error et eum
                            eveniet
                            exercitationem magni nam nihil nostrum odio optio perspiciatis placeat praesentium quo
                            reiciendis
                            reprehenderit, repudiandae ullam ut veritatis. Ad animi asperiores eius esse exercitationem
                            fuga
                            illo ipsam molestiae neque nihil nisi quaerat, reprehenderit, sit. A animi, aperiam
                            cupiditate esse
                            eveniet expedita explicabo facere fugiat id impedit incidunt, inventore itaque
                            necessitatibus neque
                            odio perspiciatis placeat quam quasi quibusdam, quidem quisquam ullam vitae
                            voluptatibus!</p>
                    </div>
                </div>
            </Container>
        </>

    );
};

export default SeparatePage;