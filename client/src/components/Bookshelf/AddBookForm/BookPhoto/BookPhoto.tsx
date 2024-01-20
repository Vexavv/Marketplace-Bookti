import { FC } from 'react';
import styles from './BookPhoto.module.scss';

interface IBookPhotoprops {
    url: string;
}

const BookPhoto: FC<IBookPhotoprops> = ({ url }) => {
    return url ? (
        <div className={styles.Wrapper}>
            <img src={url} className={styles.WrapperImg} alt="Book" />
        </div>
    ) : (
        <div className={styles.Wrapper}>
            <img src="/bookshelf/image.png" alt="Book" />
        </div>
    );
};

export default BookPhoto;
