import { RouteObject, Navigate } from "react-router";

import AdminPage from "../pages/AdminPage/AdminPage";
import Book from "../components/AdminComponents/AdminTabs/Book/Books";
import Reviews from "../components/AdminComponents/AdminTabs/Reviews/Reviews";
import bookshelfTabsService from '../services/BookshelfTabsService/bookshelf.tabs.service';


export const adminRoutes: RouteObject[] = [
    {
        path: "accept",
        element: <AdminPage/>,
        children: [
            {
                path: "books",
                element: <Book/>,
                loader: async () => {
                    const data = await bookshelfTabsService.getData('books');

                    return data;
                },
                errorElement: <div>error</div>,
            },
            {
                path: "reviews",
                element: <Reviews/>
            },
            {
                index: true,
                element: <Navigate to="books" />,
            },
        ]
    }
]