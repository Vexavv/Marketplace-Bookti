import { FC } from 'react';
import { useLoaderData } from 'react-router';
import { IResData } from '../../../../../store/slices/profileSlice/profileSliceTypes';
import styles from './Interest.module.scss';
import cn from 'classnames';
import BookItem from './BookItem/BookItem';
import { useTranslation } from 'react-i18next';

const Interest: FC = () => {
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
                    {t('interesting.empty')}
                </div>
            )}
        </div>
    );
};

export default Interest;
