import React, {useEffect} from 'react';
import styles from './Favorite.module.scss'
import {useAppDispatch, useAppSelector} from "../../hook";
import {useTranslation} from "react-i18next";
import Container from "../../uiComponent/Container/Container";
import Back from "../../uiComponent/Back/Back";
import BookItem from "../../components/Bookshelf/BookshelfList/BookItem/BookItem";
import FavoriteItem from "../../components/FavoriteCompanents/FavoriteItem/FavoriteItem";
import {getUserAsync, logout} from "../../store/slices/userSlices/authSlice";

const Favorite = () => {
const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user)

    const favBooks = user?.wishlist?.items


//-------------------------------------------------------------------------------------------------------
    const updateFavorite = useAppSelector(state => state.favorite.updateData)
    useEffect(() => {
        dispatch(getUserAsync())
    }, [updateFavorite]);

//-------------------------------------------------------------------------------------------------------

    return (
        <Container>
            <Back text="Обране"/>
            <div className={styles.Favorite}>
                {favBooks && favBooks.length > 0 ? (favBooks.map(
                    item => (<FavoriteItem key={item.id} {...item} />)
                )) : <p>Favorite Пока ничего нет</p>}
            </div>


        </Container>
    );
};

export default Favorite;