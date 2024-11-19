import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import About from "../../Pages/About/About";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import ProductPage from "../../Pages/ProductFilter/ProductPage";
import SignUp from "./../../../SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../../Layout/DashboardLayout";
import MyOrder from './../../Pages/Dashboards/MyOrder/MyOrder';

import AllUsers from './../../Pages/Dashboards/AllUsers/AllUsers';
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProducts from "../../Pages/Dashboards/AddProduct/AddProducts";
import AllProducts from './../../Pages/Dashboards/AllProducts/AllProducts';
import Payment from './../../Pages/Dashboards/Payment/Payment';
import SellerAdminRoute from './../SellerAdminRoute';
import Faqs from './../../Shared/Footer/Faqs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
  
      { path: "/category/:category", element: <ProductPage /> },
      { path: "/products/:category", element: <ProductPage /> },

      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/faq",
        element: <Faqs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrder />
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
          // <AllUsers />
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerAdminRoute>
            <AddProducts />
          </SellerAdminRoute>
        ),
      },
      {
        path: "/dashboard/all-products",
        element: <AdminRoute>
                  <AllProducts />
                </AdminRoute>
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:7000/bookings/${params.id}`),
        element: (
          <Payment/>
          // <AdminRoute>
          //   <Payment />
          // </AdminRoute>
        ),
      },
    ]
  }
]);

export default router;
