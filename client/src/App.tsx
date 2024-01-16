import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Library from './pages/Library/Library';
import Journal from './pages/Journal/Journal';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import LogIn from './pages/LogIn/LogIn';
import Registration from './pages/Registration/Registration';
import MyAccount from './pages/MyAccount/MyAccount';
import Modal from './components/Modal/Modal';
import Forum from './pages/Forum/Forum';
import Chat from './pages/Chat/Chat';
import Message from './pages/Message/Message';
import Bookshelf from './pages/Bookshelf/Bookshelf';
import Favorite from './pages/Favorite/Favorite';
import WantRead from './pages/WantRead/WantRead';
import PrivateRoute from './utils/PrivateRoute/PrivateRoute';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/journal" element={<Journal />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/message" element={<Message />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/bookshelf" element={<Bookshelf />} />
                    </Route>
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/wantRead" element={<WantRead />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/account" element={<MyAccount />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>

            <Modal />
        </div>
    );
}

export default App;
