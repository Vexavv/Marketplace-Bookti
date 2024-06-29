import { FC } from 'react';
import { number } from 'yup';
import styles from './AdminListBook.module.scss';
import { useTranslation } from 'react-i18next';

const content: any[] = [
    {
        name: 'Марія',
        title: 'Маленький Принц',
        date: '10.10.2024',
        status: 'Новий',
    },
];

interface typeProps {
    // idPage: number | undefined,
    changeBook: (id: number | undefined) => void;
}

const AdminListBook: FC<typeProps> = ({ changeBook }) => {
    const { t } = useTranslation('admin');

    return (
        <div className={styles.AdminBooks}>
            {content.length ? (
                <div>
                    <h2>{t('filter.date')}</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>{t('columnTitle.name')}</th>
                                <th>{t('columnTitle.title')}</th>
                                <th>{t('columnTitle.date')}</th>
                                <th>{t('columnTitle.status')}</th>
                            </tr>
                            {content.map((book, index: number) => {
                                return (
                                    <tr
                                        key={`row${index}`}
                                        onClick={() => {
                                            changeBook(1);
                                        }}
                                    >
                                        <td>{book.name}</td>
                                        <td>{book.title}</td>
                                        <td>{book.date}</td>
                                        <td>{book.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>{t('noContent')}</p>
            )}
        </div>
    );
};

export default AdminListBook;
