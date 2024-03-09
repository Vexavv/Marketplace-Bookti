import { Navigate, RouteObject } from 'react-router';
import MyAccount from '../pages/MyAccount/MyAccount';
import MyBookShelf from '../components/MyAccountComponent/Profile/Tabs/MyBookshelf/MyBookshelf';
import Interest from '../components/MyAccountComponent/Profile/Tabs/Interest/Interest';
import Reviews from '../components/MyAccountComponent/Profile/Tabs/Reviews/Reviews';

export const profileRoutes: RouteObject[] = [
    {
        path: 'account',
        element: <MyAccount />,
        children: [
            {
                path: 'my-bookshelf',
                element: <MyBookShelf />,
            },
            {
                path: 'interest',
                element: <Interest />,
            },
            {
                path: 'reviews',
                element: <Reviews />,
            },
            {
                index: true,
                element: <Navigate to="my-bookshelf" />,
            },
        ],
    },
];
