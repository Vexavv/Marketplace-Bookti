import { RouteObject } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute/PrivateRoute';
import Bookshelf from '../pages/Bookshelf/Bookshelf';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Library from '../pages/Library/Library';
import Journal from '../pages/Journal/Journal';
import TermsAndConditions from '../pages/TermsAndConditions/TermsAndConditions';
import WantRead from '../pages/WantRead/WantRead';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import LogIn from '../pages/LogIn/LogIn';
import Registration from '../pages/Registration/Registration';
import MyAccount from '../pages/MyAccount/MyAccount';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Forum from '../pages/Forum/Forum';
import Chat from '../pages/Chat/Chat';
import Message from '../pages/Message/Message';
import Favorite from '../pages/Favorite/Favorite';
import Layout from '../components/Layout/Layout';
import AddBook from '../pages/AddBook/AddBook';
import RenamePassword from "../pages/RenamePassword/RenamePassword";

export const routesConfig: RouteObject[] = [
    {
        element: <Layout />,
        path: '/',
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'library',
                element: <Library />,
            },
            {
                path: 'journal',
                element: <Journal />,
            },
            {
                path: 'forum',
                element: <Forum />,
            },
            {
                path: 'terms',
                element: <TermsAndConditions />,
            },
            {
                path: 'chat',
                element: <Chat />,
            },
            {
                path: 'message',
                element: <Message />,
            },
            {
                path: 'favorite',
                element: <Favorite />,
            },
            {
                path: 'wantRead',
                element: <WantRead />,
            },
            {
                path: 'privacy',
                element: <PrivacyPolicy />,
            },
            {
                path: 'login',
                element: <LogIn />,
            },
            {
                path: 'registration',
                element: <Registration />,
            },
            {
                path: 'renamePassword/:resetToken',
                element: <RenamePassword />,
            },
            {
                path: '*',
                element: <PageNotFound />,
            },
            //------------------Private routes-------------------------
            {
                path: '/',
                element: <PrivateRoute />,
                children: [
                    {
                        path: 'account',
                        element: <MyAccount />,
                    },
                ],
            },
            {
                path: '/',
                element: <PrivateRoute />,
                children: [
                    {
                        path: 'bookshelf',
                        element: <Bookshelf />,
                    },
                ],
            },
            {
                path: '/',
                element: <PrivateRoute />,
                children: [
                    {
                        path: 'bookshelf/add-book',
                        element: <AddBook />,
                    },
                ],
            },
        ],
    },
];
