import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Routes/Home/Home.jsx';
import Login from './Routes/Login/Login.jsx';
import SignUp from './Routes/SignUp/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Orders from './Components/Orders/Orders.jsx';
import PrivateRoutes from './Routes/PrivateRoutes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/orders",
        element: <PrivateRoutes>  <Orders />  </PrivateRoutes>,
      },
      {
        path: "/purchased",
        element:   <Orders /> ,
      },
      {
        path: "/orders",
        element:  <Orders /> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>,
  </StrictMode>,
)
