import React from 'react';
import styles from './FavoriteItem.module.scss';
import {FavoriteItemProps} from "./FavoriteItem.props";
import Button from "../../../uiComponent/Button/Button";
import {useTranslation} from "react-i18next";
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import {styled} from "@mui/material/styles";
import {useAppDispatch} from "../../../hook";
import { favoriteDeleteAsync} from "../../../store/slices/favoriteSlice/favoriteSlice";
import {Link} from "react-router-dom";

const FavoriteItem = ({id, imageUrl, language, title, author}: FavoriteItemProps) => {

    const {t} = useTranslation(['favorite','separatePage']);
    const dispatch = useAppDispatch();
    const deleteFavorite = async () => {
        try{
                await dispatch(favoriteDeleteAsync(id));

        }catch(error){
            console.error(error)
        }
    }



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
        <div className={styles.Card}>
            <div className={styles.CardImageWrapper}>
                {imageUrl ? <img className={styles.CardImageWrapperAvatar} src={imageUrl} alt="Book-Avatar"/> :
                    <img className={styles.CardImageWrapperImage}  src='/bookshelf/image.png' alt="Image"/>}
            </div>
            <div className={styles.CardContent}>
                <p className={styles.CardContentTitle}>"{title}"</p>
                <p className={styles.CardContentText}><span>{t('separatePage:Book.author')}</span>{author}</p>
                <p className={styles.CardContentText}><span>{t('Card.language')}</span>{language ? language.charAt(0).toUpperCase() + language.slice(1).toLowerCase() : ''}</p>
                <MyTooltip title={t('Card.delete')}>
                    <img onClick={deleteFavorite} className={styles.CardContentDelete} src="/favorite/del.svg" alt="delet"/>
                </MyTooltip>
                <div className={styles.CardContentButton}>
                    <Link to={`/separatePage/${id}`}>
                        <Button name='FavoriteCardButton'>{t('Card.button')}</Button>
                    </Link>

                </div>


            </div>


        </div>
    );
};

export default FavoriteItem;