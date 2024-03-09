import { Navigate, RouteObject } from 'react-router';
import bookshelfTabsService from '../services/BookshelfTabsService/bookshelf.tabs.service';
import Bookshelf from '../pages/Bookshelf/Bookshelf';
import Swapping from '../components/Bookshelf/BookshelfTabs/Swapping/Swapping';
import Donations from '../components/Bookshelf/BookshelfTabs/Donations/Donations';
import Moderation from '../components/Bookshelf/BookshelfTabs/Moderation/Moderation';
import Rejected from '../components/Bookshelf/BookshelfTabs/Rejected/Rejected';
import Reserved from '../components/Bookshelf/BookshelfTabs/Reserved/Reserved';
import Deactivated from '../components/Bookshelf/BookshelfTabs/Deactivated/Deactivated';
import MyWishlist from '../components/Bookshelf/BookshelfTabs/MyWishlist/MyWishlist';

export const bookshelfRoutes: RouteObject[] = [
    {
        path: 'bookshelf',
        element: <Bookshelf />,
        children: [
            {
                path: 'swapping',
                element: <Swapping />,
                loader: async () => {
                    const data = await bookshelfTabsService.getData('books');

                    return data;
                },
                errorElement: <div>error</div>,
            },
            {
                path: 'donations',
                element: <Donations />,
                loader: async () => {
                    return { content: [] };
                },
                errorElement: <div>error</div>,
            },
            {
                path: 'moderation',
                element: <Moderation />,
                loader: async () => {
                    return { content: [] };
                },
                errorElement: <div>error</div>,
            },
            {
                path: 'rejected',
                element: <Rejected />,
                loader: async () => {
                    return { content: [] };
                },
                errorElement: <div>error</div>,
            },
            {
                path: 'reserved',
                element: <Reserved />,
                loader: async () => {
                    return { content: [] };
                },
                errorElement: <div>error</div>,
            },
            {
                path: 'deactivated',
                element: <Deactivated />,
                loader: async () => {
                    return { content: [] };
                },
                errorElement: <div>error</div>,
            },
            {
                path: 'my-wishlist',
                element: <MyWishlist />,
                loader: async () => {
                    return { content: [] };
                },
                errorElement: <div>error</div>,
            },
            {
                index: true,
                element: <Navigate to="swapping" />,
            },
        ],
    },
];