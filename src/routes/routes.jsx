import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import ErrorPage from "../components/shared/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import DashboardLayouts from "../layouts/DashboardLayouts";
import PrivateRoute from "./PrivateRoutes";
import AddProducts from "../components/dashboard/AddProducts";
import Allproducts from "../components/dashboard/Allproducts";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "contact",
            element: <Contact />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Dashboard/>
        },
        {
            path: "add-products",
            element: (
              <PrivateRoute>
                <AddProducts />
              </PrivateRoute>
            ),
        },
        {
            path: "all-products",
            element: (
              <PrivateRoute>
                <Allproducts />
              </PrivateRoute>
            ),
        },
        
        
    ]
  },
  
]);

export default router;