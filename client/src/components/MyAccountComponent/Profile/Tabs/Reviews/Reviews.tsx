import { FC } from 'react';
import { useAppDispatch } from '../../../../../hook';
import { openModal } from '../../../../../store/slices/modalSlice';
import { useTranslation } from 'react-i18next';
import styles from './Reviews.module.scss';

const Reviews: FC = () => {
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
        </div>
    );
};

export default Reviews;
