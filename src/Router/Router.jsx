import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import SingleProductPage from "../pages/SinpleProductPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/product/:id",
                element: <SingleProductPage/>
            },
        ],
    }
])

export default router