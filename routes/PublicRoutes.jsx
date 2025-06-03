import { createBrowserRouter } from "react-router-dom";
import App from '../src/App';

const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
])

export default PublicRoutes
