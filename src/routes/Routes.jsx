import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Order from "../pages/Order/Order";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cart from "../pages/Dashboard/Cart";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[

            {
                index:true,
                element:  <Home></Home>
            },
            {
                path:"/menu",
                element:<Menu></Menu>
            },
            {
                path:"/order/:category",
                element:<PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path:"/signup",
                element:<Registration></Registration>
            },
            {
                path:"/signin",
                element:<Login></Login>
            },
            
            
           
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"cart",
                element:<Cart></Cart>
            }
        ]
    }

])


export default routes;