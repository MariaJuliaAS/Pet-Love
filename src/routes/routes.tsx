import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home } from "../pages/home";
import { Products } from "../pages/products";
import { Cart } from "../pages/cart";
import { Details } from "../pages/details";
import { ErrorPage } from "../pages/error";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/details/:id",
                element: <Details />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
])

export { router };