/* eslint-disable react/prop-types */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "@/hooks/authProvider";
import Signin from "@/pages/signin/Signin";
import Layout from "@/components/sidebar/Layout";
import Products from "@/pages/products/Products";
import ProductForm from "@/pages/products/components/ProductForm";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "*",
      element: <div>Page not found</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
          children: [
            {
              path: "/",
              element: <div>Home</div>,
            },
            {
              path: "/products",
              element: <Products />,
            },
            {
              path: "/products/new",
              element: <ProductForm />,
            },
            {
              path: "/products/update",
              element: <ProductForm />,
            },
          ],
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/signin",
      element: <Signin />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
