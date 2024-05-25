import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {IBook} from '../../../../../../store/slices/profileSlice/profileSliceTypes';
import Tooltip from '@mui/material/Tooltip';
import Button from '../../../../../../uiComponent/Button/Button';
import styles from './BookItem.module.scss';
import {closeModal, openModal,} from '../../../../../../store/slices/modalSlice';
import {useAppDispatch, useAppSelector} from '../../../../../../hook';
import {favoriteDataAsync} from '../../../../../../store/slices/favoriteSlice/favoriteSlice';

// type BookItemType = Omit<
//     IBook,
//     'userId' | 'description' | 'tradeFormat' | 'publicationYear' | 'genre'
// >;

// interface IBookItemProps extends BookItemType {
// }

const BookItem: FC<IBook> = ({
                                          imageUrl,
                                          title,
                                          author,
                                          language,
                                          id,
                                          publicationYear,
                                          genre


                                      }) => {
    const {t} = useTranslation(['profile', 'favorite']);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    //--------------------------open modal--------------------
    const handleOpenModal = () => {
        dispatch(
            openModal({
                type: 'bookMessage',
                props: {key: 'value'},
                title: title,
                author: author,
                language: language,
                imageUrl: imageUrl,
                publicationYear: publicationYear,
                genre: genre
            })
        );
    };

    const handleOpenMessageModal = () => {
        dispatch(
            openModal({
                type: 'informMessage',
                props: {key: 'value'},
                text: t('favorite:Modal.alreadyAdded'),
            })
        );
        setTimeout(() => {
            dispatch(closeModal());
        }, 3000);
    };
    //---------------------add to favorite ---------------------
    const user = useAppSelector(state => state.auth.user);
    const haveBook = user?.wishlist?.items;
    const addToFavorites = async () => {
        try {
            const check = haveBook && haveBook.find(item => item.id === id);
            if (check) {
                handleOpenMessageModal();
            } else {
                await dispatch(favoriteDataAsync(id));
            }
            await setIsFavorite(!isFavorite);
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
                    backgroundSize: `${imageUrl ? 'cover' : '50%'}`,
                    backgroundImage: `url(${
                        imageUrl ? imageUrl : '/bookshelf/image.png'
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
    );
};

export default BookItem;
