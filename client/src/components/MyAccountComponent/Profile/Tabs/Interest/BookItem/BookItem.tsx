import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IBook } from '../../../../../../store/slices/profileSlice/profileSliceTypes';
import Button from '../../../../../../uiComponent/Button/Button';
import styles from './BookItem.module.scss';

type BookItemType = Omit<
    IBook,
    'user_id' | 'description' | 'trade_format' | 'publication_date' | 'genre'
>;

interface IBookItemProps extends BookItemType {}

const BookItem: FC<IBookItemProps> = ({
    image_url,
    title,
    author,
    language,
}) => {
    const { t } = useTranslation('profile');

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
                    <div style={{ display: 'flex' }}>
                        <span>"</span>
                        <h1 title={title}>{title}</h1>
                        <span>"</span>
                    </div>
                    <h2 title={author}>{author}</h2>
                </div>

                <div className={styles.WrapperInfoTable}>
                    <p>
                        {t('interesting.item.info-table.lang')}:{' '}
                        <span>{language}</span>
                    </p>
                </div>

                <Button name="SeparateExchange" onClick={() => {}}>
                    {t('interesting.item.btn-write')}
                </Button>
            </div>
        </div>
    );
};

export default BookItem;
