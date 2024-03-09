import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router';
import { useAppDispatch } from '../../../../../hook';
import { openModal } from '../../../../../store/slices/modalSlice';
import ReviewItem from './ReviewItem/ReviewItem';
import styles from './Reviews.module.scss';

const Reviews: FC = () => {
    const { content } = useLoaderData() as { content: any[] };
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperBtnBox}>
                <button
                    onClick={() =>
                        dispatch(openModal({ type: 'addReview', props: '' }))
                    }
                >
                    {t('reviews.btn-add-review')}
                </button>
            </div>
            {!!content.length &&
                content.map(item => <ReviewItem key={item.text} {...item} />)}
        </div>
    );
};

export default Reviews;
