import { FC } from 'react';
import styles from './Interest.module.scss';
import cn from 'classnames';
import BookItem from './BookItem/BookItem';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../hook';

const Interest: FC = () => {
    const { t } = useTranslation('profile');
    const { user } = useAppSelector(state => state.auth);
    const wishlist = user?.wishlist?.items;

    return (
        <div
            className={cn(styles.Wrapper, {
                [styles.IsGrid]: !!wishlist?.length,
            })}
        >
            {wishlist?.length ? (
                wishlist.map(item => <BookItem key={item.id} {...item} />)
            ) : (
                <div className={styles.WrapperNotExist}>
                    {t('interesting.empty')}
                </div>
            )}
        </div>
    );
};

export default Interest;
