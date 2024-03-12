import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { rootRoutes } from './routing/root';
import './App.css';

const routes = createBrowserRouter(rootRoutes, {
    future: { v7_partialHydration: true },
});

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
