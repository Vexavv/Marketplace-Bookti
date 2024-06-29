import styles from './AdminBook.module.scss';
import { useTranslation } from 'react-i18next';
import AdminListBook from './AdminListBook/AdminListBook';
import AdminBook from './AdminBook/AdminBook';
import { FC } from 'react';

interface typeProps {
    idPage: number | undefined,
    changePage: (id: number | undefined) => void 
}


const AdminBooks: FC<typeProps> = ({idPage, changePage}) => {
    return !idPage ? <AdminListBook changeBook={changePage}/> :  <AdminBook idPage={idPage}/>
};

export default AdminBooks;
