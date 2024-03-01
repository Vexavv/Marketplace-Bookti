import { FC } from 'react';
import { useLoaderData } from 'react-router';
import { IResData } from '../../../../store/slices/profileSlice/profileSliceTypes';
import BookshelfList from '../../BookshelfList/BookshelfList';

const Swapping: FC = () => {
    const data = useLoaderData() as IResData;

    console.log(data);

    return <BookshelfList {...data} />;
};

export default Swapping;
