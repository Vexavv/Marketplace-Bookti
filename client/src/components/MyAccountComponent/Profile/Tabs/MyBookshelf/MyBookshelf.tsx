import { FC, memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hook';
import { getBooksAsync } from '../../../../../store/slices/profileSlice/profileSliceAsync';

const MyBookShelf: FC = memo(() => {
    const { status, data } = useAppSelector(state => state.profile);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = () => {
            dispatch(getBooksAsync());
        };

        fetchData();
    }, []);

    return <div>MyBookShelf component</div>;
});

export default MyBookShelf;
