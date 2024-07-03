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
                element: <Book/>
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