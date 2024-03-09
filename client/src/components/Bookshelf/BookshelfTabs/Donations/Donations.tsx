import { FC } from 'react';
import BookshelfList from '../../BookshelfList/BookshelfList';
import { useLoaderData } from 'react-router';
import { IResData } from '../../../../store/slices/profileSlice/profileSliceTypes';

const Donations: FC = () => {
    const data = useLoaderData() as IResData;

    return <BookshelfList {...data} />;
};

export default Donations;
