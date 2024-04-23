import React from 'react';
import styles from './FavoriteItem.module.scss';
import {FavoriteItemProps} from "./FavoriteItem.props";
import Button from "../../../uiComponent/Button/Button";
import {useTranslation} from "react-i18next";
import Tooltip, {TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import {styled} from "@mui/material/styles";

const FavoriteItem = ({id, image_url, language, title, author}: FavoriteItemProps) => {

    const {t} = useTranslation('favorite');

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

            <img className={styles.CardImage} src={image_url} alt="img"/>
            <div className={styles.CardContent}>
                <p className={styles.CardContentTitle}>"{title}"</p>
                <p className={styles.CardContentText}>{author}</p>
                <p className={styles.CardContentText}><span>{t('Card.language')}</span>{language}</p>
                <MyTooltip title={t('Card.delete')}>
                    <img className={styles.CardContentDelete} src="/favorite/del.svg" alt="delet"/>
                </MyTooltip>
                <div className={styles.CardContentButton}>
                    <Button name='FavoriteCardButton'>{t('Card.button')}</Button>
                </div>


            </div>


        </div>
    );
};

export default FavoriteItem;