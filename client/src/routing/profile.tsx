import { Navigate, RouteObject } from 'react-router';
import MyAccount from '../pages/MyAccount/MyAccount';
import MyBookShelf from '../components/MyAccountComponent/Profile/Tabs/MyBookshelf/MyBookshelf';
import Interest from '../components/MyAccountComponent/Profile/Tabs/Interest/Interest';
import Reviews from '../components/MyAccountComponent/Profile/Tabs/Reviews/Reviews';
import Loader from '../uiComponent/Loader/Loader';

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
                loader: async () => {
                    return {
                        content: [
                            { text: 'Рекомендую!!!!' },
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum laborum vitae voluptas facere, hic sed voluptatibus tempore! Voluptates nam earum consequatur? Officia quam qui iure similique a quod dicta!',
                            },
                        ],
                    };
                },
                HydrateFallback: Loader,
                errorElement: <div>error</div>,
            },
            {
                index: true,
                element: <Navigate to="my-bookshelf" />,
            },
        ],
    },
];
