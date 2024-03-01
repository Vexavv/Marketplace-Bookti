import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { rootRoutes } from './routing/root';
import './App.css';

const routes = createBrowserRouter(rootRoutes);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
