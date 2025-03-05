import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Registration from "../Registration/Registration";
import Login from "../pages/Login/Login";
 
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
                path:"/signup",
                element:<Registration></Registration>
            },
            {
                path:"/signin",
                element:<Login></Login>
            },
            
            
           
        ]
    },

])


export default routes;