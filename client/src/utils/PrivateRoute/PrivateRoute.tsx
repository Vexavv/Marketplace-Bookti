import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hook';

const PrivateRoute: FC = () => {
    const { user } = useAppSelector(state => state.auth);

    return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
