import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage />
    }
])
export default router;