import React from 'react';
import styles from './Favorite.module.scss'
import {useAppSelector} from "../../hook";
import {useTranslation} from "react-i18next";
import Container from "../../uiComponent/Container/Container";
import Back from "../../uiComponent/Back/Back";
import BookItem from "../../components/Bookshelf/BookshelfList/BookItem/BookItem";
import FavoriteItem from "../../components/FavoriteCompanents/FavoriteItem/FavoriteItem";
import {logout} from "../../store/slices/userSlices/authSlice";
const Favorite = () => {

    const user = useAppSelector(state => state.auth.user)
    console.log(user?.wishlist?.items)
    console.log(user?.books)

const favBooks = user?.books?.items
    console.log("Favorite",favBooks)

    return (
        <Container>
            <Back text="Обране"/>

            {favBooks && favBooks.length > 0 ? (favBooks.map(

                item => (<FavoriteItem key={item.id} {...item} />

                )
            )) : <p>Favorite Пока ничего нет</p>}


        </Container>
    );
};

export default Favorite;