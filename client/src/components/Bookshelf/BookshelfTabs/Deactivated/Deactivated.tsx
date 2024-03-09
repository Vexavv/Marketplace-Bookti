import { FC } from 'react';
import { IResData } from '../../../../store/slices/profileSlice/profileSliceTypes';
import { useLoaderData } from 'react-router';
import BookshelfList from '../../BookshelfList/BookshelfList';

const Deactivated: FC = () => {
    const data = useLoaderData() as IResData;

    return <BookshelfList {...data} />;
};

export default Deactivated;
