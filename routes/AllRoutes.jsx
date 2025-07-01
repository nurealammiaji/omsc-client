import { createBrowserRouter } from "react-router-dom";
import App from '../src/App';
import Home from "../src/pages/Home/Home";
import DiarySelection from "../src/pages/DiarySelection/DiarySelection";
import DiaryEntry from "../src/pages/DiaryEntry/DiaryEntry";

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/selection",
                element: <DiarySelection />
            },
            {
                path: "/entry",
                element: <DiaryEntry />
            },
        ]
    },
])

export default AllRoutes
