import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { closeModal } from '../../../store/slices/modalSlice';
import { setStatus } from '../../../store/slices/addBookSlice/addBookSlice';
import { useAppDispatch, useAppSelector } from '../../../hook';
import BookPhoto from '../AddBookForm/BookPhoto/BookPhoto';
import Button from '../../../uiComponent/Button/Button';
import styles from './AddBookSuccess.module.scss';

const AddBookSuccess: FC = () => {
    const { t } = useTranslation('addBook');
    const { data } = useAppSelector(state => state.addBook);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleCloseModal = () => {
        dispatch(closeModal());
        navigate('/account/my-bookshelf');
    };

    return (
        <div className={styles.Wrapper}>
            <div className={styles.WrapperHeading}>
                <h1>{t('success.title-1')}</h1>
                <h1>{t('success.title-2')}</h1>
            </div>
            <BookPhoto
                url={data ? data.imageUrl : ''}
                width={198}
                height={253}
            />
            <div className={styles.WrapperBtnsBox}>
                <Button name="AddBook">{data?.title}</Button>
                <button
                    className={styles.WrapperBtnsBoxBtn}
                    onClick={handleCloseModal}
                >
                    {t('success.btn-1')}
                </button>
                <button
                    className={styles.WrapperBtnsBoxBtn}
                    onClick={() => dispatch(setStatus())}
                >
                    {t('success.btn-2')}
                </button>
            </div>
        </div>
    );
};

export default AddBookSuccess;
