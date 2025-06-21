import { createBrowserRouter } from "react-router-dom";
import App from '../src/App';
import Home from "../src/pages/Home/Home";
import RoutineEntry from "../src/pages/Student/RoutineEntry/RoutineEntry";
import Routine from "../src/pages/Student/Routine/Routine";

const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    },
    {
        path: "/entry",
        element: <RoutineEntry />
    },
    {
        path: "/routine",
        element: <Routine />
    }
])

export default PublicRoutes
