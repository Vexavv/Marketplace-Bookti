import { FC } from 'react';
import styles from './BookPhoto.module.scss';

interface IBookPhotoprops {
    url: string;
    width?: number;
    height?: number;
}

const BookPhoto: FC<IBookPhotoprops> = ({ url, width, height }) => {
    return url ? (
        <div className={styles.Wrapper} style={{ width, height }}>
            <img src={url} className={styles.WrapperImg} alt="Book" />
        </div>
    ) : (
        <div className={styles.Wrapper} style={{ width, height }}>
            <img src="/bookshelf/image.png" alt="Book" />
        </div>
    );
};

export default BookPhoto;
