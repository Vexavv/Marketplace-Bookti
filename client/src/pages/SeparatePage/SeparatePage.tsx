import React, {useEffect, useState} from 'react';
import styles from './SeparatePage.module.scss'
import {useTranslation} from "react-i18next";
import {useNavigate} from 'react-router-dom';
import BookInfo from "../../components/SeparatePageComponent/BookInfo/BookInfo";
import UserInformation from "../../components/SeparatePageComponent/UserInformation/UserInformation";
import Container from "../../uiComponent/Container/Container";
import {useAppDispatch, useAppSelector} from "../../hook";
import {useParams} from "react-router";
import {BASE_URL} from "../../constants/api";
import axios from 'axios';
import {closeModal, openModal} from "../../store/slices/modalSlice";
import {backUpFavorite} from "../../store/slices/favoriteSlice/favoriteSlice";
import {getUserAsync} from "../../store/slices/userSlices/authSlice";
import {User} from "../../types";

interface Book {
    id: number,
    title: string,
    author: string,
    genre: string,
    language: string,
    description: string,
    publicationDate: string
    tradeFormat: string,
    imageUrl: string,
    owner: User | null
}


const SeparatePage = () => {
    const {t} = useTranslation(['separatePage', 'login', 'favorite']);
    const navigate = useNavigate();
    //-----------------------------------------------------------
    const {id} = useParams();
    const [book, setBook] = useState<Book | null>(null)


    useEffect(() => {
        const fetchDataBook = async () => {
            try {
                const response = await axios.get<Book>(`${BASE_URL}/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchDataBook();
    }, []);
    const owner = book?.owner ?? null;
    //-----------------------------------------------------------
    const dispatch = useAppDispatch()
    const updateFavorite = useAppSelector(state => state.favorite.updateData)
    const statusFavorite = useAppSelector(state => state.favorite.statusAdded)

    const handleOpenModal = () => {
        dispatch(openModal({type: 'informMessage', props: {key: 'value'}, text: t('favorite:Modal.added')}));
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    }
    useEffect(() => {
        if (statusFavorite === 'loaded') {
            handleOpenModal();
            dispatch(backUpFavorite())
        }
    }, [statusFavorite]);
    useEffect(() => {
        dispatch(getUserAsync())
    }, [updateFavorite]);

    return (
        <>
            <Container>
                <div className={styles.Wrapper}>
                    <button className={styles.WrapperBack} onClick={() => navigate(-1)}>
                        <img src="/bookshelf/arrow-back.svg" alt="Back"/>
                        <span>{t('login:arrow')}</span>
                    </button>
                    <div className={styles.WrapperContent}>
                        <BookInfo  {...book}/>
                        <UserInformation user={owner} admin={false} />
                    </div>
                    <div className={styles.WrapperDescription}>
                        <h3 className={styles.WrapperDescriptionTitle}>{t('separatePage:Title')}</h3>
                        <p className={styles.WrapperDescriptionText}>{book?.description}</p>
                    </div>
                </div>
            </Container>
        </>

    );
};

export default SeparatePage;