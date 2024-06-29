import {RouteObject} from 'react-router-dom';
import {bookshelfRoutes} from './bookshelf';
import {profileRoutes} from './profile';
import { adminRoutes } from './admin';
import PrivateRoute from '../utils/PrivateRoute/PrivateRoute';
import AddBook from '../pages/AddBook/AddBook';
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import Library from '../pages/Library/Library';
import Journal from '../pages/Journal/Journal';
import TermsAndConditions from '../pages/TermsAndConditions/TermsAndConditions';
import Message from '../pages/Message/Message';
import Favorite from '../pages/Favorite/Favorite';
import WantRead from '../pages/WantRead/WantRead';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import LogIn from '../pages/LogIn/LogIn';
import Registration from '../pages/Registration/Registration';
import RenamePassword from '../pages/RenamePassword/RenamePassword';
import SeparatePage from '../pages/SeparatePage/SeparatePage';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Home from '../pages/Home/Home';
import Forum from '../pages/Forum/Forum';
import Chat from '../pages/Chat/Chat';
import MySettings from "../pages/MySettings/MySettings";
import MySubscriptions from "../pages/MySubscriptions/MySubscriptions";
import Account from "../pages/Account/Account";
export const rootRoutes: RouteObject[] = [
    {
        element: <Layout/>,
        path: '/',
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'library',
                element: <Library/>,
            },
            {
                path: 'journal',
                element: <Journal/>,
            },
            {
                path: 'forum',
                element: <Forum/>,
            },
            {
                path: 'terms',
                element: <TermsAndConditions/>,
            },
            {
                path: 'chat',
                element: <Chat/>,
            },
            {
                path: 'message',
                element: <Message/>,
            },
            {
                path: 'wantRead',
                element: <WantRead/>,
            },
            {
                path: 'privacy',
                element: <PrivacyPolicy/>,
            },
            {
                path: 'login',
                element: <LogIn/>,
            },
            {
                path: 'registration',
                element: <Registration/>,
            },
            {
                path: 'renamePassword',
                element: <RenamePassword/>,
            },
            {
                path: 'separatePage/:id',
                element: <SeparatePage/>,
            },
            {
                path: 'account/:id',
                element: <Account/>,
            },
            {
                path: '*',
                element: <PageNotFound/>,
            },
            //------------------Private routes-------------------------
            {
                path: '/',
                element: <PrivateRoute/>,
                children: profileRoutes,
            },
            {
                path: '/',
                element: <PrivateRoute/>,
                children: bookshelfRoutes,
            },
            {
                path: '/',
                element: <PrivateRoute/>,
                children: [
                    {
                        path: 'bookshelf/add-book',
                        element: <AddBook/>,
                    },
                ],
            },
            {
                path: '/',
                element: <PrivateRoute/>,
                children: [
                    {
                        path: 'settings',
                        element: <MySettings/>,
                    },
                    {
                        path: 'subscriptions',
                        element: <MySubscriptions/>,
                    },
                    {
                        path: 'favorite',
                        element: <Favorite />,
                    },

                ],
            },
            {
                path: 'admin',
                element: <PrivateRoute/>,
                children: adminRoutes,
            },
        ],
    },
];
