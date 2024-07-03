import { FC, useState } from 'react';
import AdminBooks from '../../AdminComponents/AdminBook/AdminBooks';

const Book: FC = () => {
    const [idPage, setIdPage] = useState<number | undefined>(undefined);

    function changeBook (id: number | undefined): void{
        setIdPage(id)
    }

    return <AdminBooks idPage={idPage} changePage={changeBook}/>;
};

export default Book;