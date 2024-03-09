import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { rootRoutes } from './routing/root';
import './App.css';

const routes = createBrowserRouter(rootRoutes);

function App() {
    return (
        <RouterProvider
            router={routes}
            fallbackElement={<div>Loading...</div>}
        />
    );
}

export default App;
