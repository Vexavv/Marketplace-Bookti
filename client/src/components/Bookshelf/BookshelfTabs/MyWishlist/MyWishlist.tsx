import { FC } from 'react';
import { IResData } from '../../../../store/slices/profileSlice/profileSliceTypes';
import { useLoaderData } from 'react-router';
import BookshelfList from '../../BookshelfList/BookshelfList';

const MyWishlist: FC = () => {
    const data = useLoaderData() as IResData;

    return <BookshelfList {...data} />;
};

export default MyWishlist;
