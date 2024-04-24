import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {IBook} from '../../../../../../store/slices/profileSlice/profileSliceTypes';
import Tooltip from '@mui/material/Tooltip';
import Button from '../../../../../../uiComponent/Button/Button';
import styles from './BookItem.module.scss';
import { openModal} from "../../../../../../store/slices/modalSlice";
import {useAppDispatch} from "../../../../../../hook";
import {favoriteDataAsync} from "../../../../../../store/slices/favoriteSlice/favoriteSlice";

interface IBookItemProps extends IBook {
}

const BookItem: FC<IBookItemProps> = ({
                                          image_url,
                                          title,
                                          author,
                                          language,
                                          publication_date,
                                          genre,
                                          id
                                      }) => {
    const {t} = useTranslation('profile');
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    //--------------------------open modal--------------------
    const handleOpenModal = () => {
        dispatch(openModal({
            type: 'bookMessage',
            props: {key: 'value'},
            title: title,
            author: author,
            language: language,
            image_url: image_url,
            publication_date: publication_date,
            genre: genre
        }));
    }
    //---------------------add to favorite ---------------------
    const addToFavorites = async () => {
        try {
            await dispatch(favoriteDataAsync(id));
            await setIsFavorite(!isFavorite)
        } catch (error) {
            console.error(error);
        }
    };
    //-----------------------------------------------------------
    return (
        <div className={styles.Wrapper}>
            <div
                className={styles.WrapperImage}
                style={{
                    backgroundSize: `${image_url ? 'cover' : '50%'}`,
                    backgroundImage: `url(${
                        image_url ? image_url : '/bookshelf/image.png'
                    })`,
                }}
            />

            <div className={styles.WrapperInfo}>
                <div className={styles.WrapperInfoHeading}>
                    <div style={{display: 'flex'}}>
                        <span>"</span>
                        <h1 title={title}>{title}</h1>
                        <span>"</span>
                    </div>
                    <h2 title={author}>{author}</h2>
                </div>

                <div className={styles.WrapperInfoTable}>
                    <p>
                        {t('bokkshelf.item.info-table.lang')}:{' '}
                        <span>{language}</span>
                    </p>
                    <Tooltip
                        title={
                            isFavorite
                                ? t('bokkshelf.item.tooltip-favorits.true')
                                : t('bokkshelf.item.tooltip-favorits.false')
                        }
                    >
                        <button onClick={addToFavorites}>
                            {isFavorite ? (
                                <img src="/profile/to-favorites.png" alt=""/>
                            ) : (
                                <img
                                    src="/profile/add-to-favorites.png"
                                    alt=""
                                />
                            )}
                        </button>
                    </Tooltip>
                </div>

                <Button name="SeparateExchange" onClick={handleOpenModal}>
                    {t('bokkshelf.item.btn-exchange')}
                </Button>
            </div>
        </div>

        // <div className={styles.Wrapper}>
        //     <div
        //         className={styles.WrapperImage}
        //         style={{
        //             backgroundSize: `${image_url ? 'cover' : '50%'}`,
        //             backgroundImage: `url(${
        //                 image_url ? image_url : '/bookshelf/image.png'
        //             })`,
        //         }}
        //     />
        //     <div className={styles.WrapperInfo}>
        //         {/* <div className={styles.WrapperInfoHeading}> */}
        //         {/* <div>
        //                 <span>"</span>
        //                 <h1>{title}</h1>
        //                 <span>"</span>
        //             </div>
        //             <h2>{author}</h2> */}
        //         <div
        //             style={{
        //                 backgroundColor: 'green',
        //                 overflow: 'hidden',
        //                 textOverflow: 'ellipsis',
        //                 whiteSpace: 'nowrap',
        //             }}
        //         >
        //             {title}
        //         </div>
        //         {/* </div> */}
        //         <div className={styles.WrapperInfoTable}>
        //             <p>
        //                 {t('bokkshelf.item.info-table.lang')}:{' '}
        //                 <span>{language}</span>
        //             </p>
        //             <Tooltip
        //                 title={
        //                     isFavorite
        //                         ? t('bokkshelf.item.tooltip-favorits.true')
        //                         : t('bokkshelf.item.tooltip-favorits.false')
        //                 }
        //             >
        //                 <button onClick={() => setIsFavorite(!isFavorite)}>
        //                     {isFavorite ? (
        //                         <img src="/profile/to-favorites.png" alt="" />
        //                     ) : (
        //                         <img
        //                             src="/profile/add-to-favorites.png"
        //                             alt=""
        //                         />
        //                     )}
        //                 </button>
        //             </Tooltip>
        //         </div>
        //         <Button name="SeparateExchange">
        //             {t('bokkshelf.item.btn-exchange')}
        //         </Button>
        //     </div>
        // </div>
    );
};

export default BookItem;
