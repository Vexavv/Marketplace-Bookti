import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router';
import { IResData } from '../../../../../store/slices/profileSlice/profileSliceTypes';
import BookItem from './BookItem/BookItem';
import styles from './MyBookshelf.module.scss';
import cn from 'classnames';

const MyBookShelf: FC = memo(() => {
    const { t } = useTranslation('profile');
    const { content } = useLoaderData() as IResData;

    return (
        <div
            className={cn(styles.Wrapper, {
                [styles.IsGrid]: !!content.length,
            })}
        >
            {content.length ? (
                content.map(item => <BookItem key={item.id} {...item} />)
            ) : (
                <div className={styles.WrapperNotExist}>
                    {t('bokkshelf.empty')}
                </div>
            )}
        </div>
    );
});

export default MyBookShelf;
