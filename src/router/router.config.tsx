import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Carts } from "../pages/carts/carts";
import { Profile } from "../pages/profile/profile";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { Detail } from "../pages/detail/detail";
import { Search } from "../pages/search/search";
// ** Tương tự switch case.
export const router = createBrowserRouter([
    {
        path: "",
        element: <Home />,
    },
    {
        path: "carts",
        element: <Carts />,
    },
    {
        path: "profile",
        element: <Profile />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "detail",
        element: <Detail />,
    },
    {
        path: "search",
        element: <Search />,
    },
    {
        path: "*", // default
        element: <>Page not found.</>,
    },
]);
