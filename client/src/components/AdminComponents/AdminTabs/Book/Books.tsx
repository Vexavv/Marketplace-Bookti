import { FC } from 'react';
import { useLoaderData } from 'react-router';
import { IResData } from '../../../../store/slices/profileSlice/profileSliceTypes';
import AdminBook from '../../AdminComponents/AdminBook/AdminBook';

const Book: FC = () => {
    const data = useLoaderData() as IResData;

    console.log(data);

    return <AdminBook />;
};

export default Book;