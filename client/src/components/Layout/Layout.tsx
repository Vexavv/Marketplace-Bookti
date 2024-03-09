import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../../uiComponent/Modal/Modal';

const Layout = () => {
    return (
        <>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
            <Modal />
        </>
    );
};

export default Layout;
