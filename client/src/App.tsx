import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routesConfig } from './constants/routes';
import Modal from './uiComponent/Modal/Modal';
import './App.css';

function App() {
    const routes = useRoutes(routesConfig);

    return (
        <>
            {routes}
            <Modal />
        </>
    );
}

export default App;
