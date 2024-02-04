import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ProfileBookShelf.module.scss';

interface IProfileBookShelfProps {
    books: any[];
}

const ProfileBookShelf: FC<IProfileBookShelfProps> = ({ books }) => {
    const { t } = useTranslation('profile');

    return (
        <section className={styles.Wrapper}>
            {books.length ? (
                <div></div>
            ) : (
                <div className={styles.WrapperBookEmpty}>
                    <span>{t('bokkshelf.empty')}</span>
                </div>
            )}
        </section>
    );
};

export default ProfileBookShelf;
