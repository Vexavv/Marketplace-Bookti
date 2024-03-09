import { FC, useState } from 'react';
import Rating from '@mui/material/Rating';
import styles from './ReviewItem.module.scss';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

const ReviewItem: FC = ({ text }: any) => {
    const { t } = useTranslation('profile');
    const [isShow, setIsShow] = useState<boolean>(false);

    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperHead}>
                <div className={styles.WrapperHeadUser}>
                    {true ? (
                        <img src="/profile/review/user.png" alt="user" />
                    ) : (
                        <img src="" alt="" />
                    )}
                    <div className={styles.Name}>
                        <h1>Наталія Коваль</h1>
                        <span>18 Січня 2024 р</span>
                    </div>
                </div>
                <div className={styles.WrapperHeadStars}>
                    <Rating
                        name="read-only"
                        className={styles.Stars}
                        value={3}
                        readOnly
                    />
                    <span className={styles.WrapperHeadStarsCounter}>
                        (3.0)
                    </span>
                </div>
            </div>
            <div className={styles.WrapperBody}>
                <p
                    className={cn(styles.Message, {
                        [styles.Active]: isShow,
                    })}
                >
                    {text}
                </p>
            </div>
            <div className={styles.WrapperFooter}>
                <div className={styles.WrapperFooterBtns}>
                    <button onClick={() => setIsShow(!isShow)}>
                        {isShow
                            ? t('reviews.item.btn-read-more.false')
                            : t('reviews.item.btn-read-more.true')}
                    </button>
                    {' | '}
                    <button>{t('reviews.item.btn-translate')}</button>
                </div>
                <div className={styles.WrapperFooterReaction}>
                    <button>
                        <img src="/profile/review/like.svg" alt="like" />
                    </button>
                    <button>
                        <img src="/profile/review/dislike.svg" alt="dislike" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
