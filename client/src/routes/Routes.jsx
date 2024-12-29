/* eslint-disable react/prop-types */
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "@/hooks/authProvider";
import Signin from "@/pages/signin/Signin";
import Layout from "@/components/sidebar/Layout";
import Products from "@/pages/products/Products";
import ProductForm from "@/pages/products/components/ProductForm";
import Bills from "@/pages/bills.js/Bills";
import BillsForm from "@/pages/bills.js/components/BillsForm";
import Stocks from "@/pages/stocks/Stock";
import StocksForm from "@/pages/stocks/components/StocksForm";
import BillsView from "@/pages/bills.js/components/BillsView";
import Clients from "@/pages/clients/Clients";
import Purchases from "@/pages/purchases/Purchases";
import Analytics from "@/pages/analytics/Analytics";
import PurchaseForm from "@/pages/purchases/components/PurchaseForm";
import BillsReport from "@/pages/bills.js/components/BillsReport";

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
            {
              path: "/stocks",
              element: <Stocks />,
            },
            {
              path: "/stocks/new",
              element: <StocksForm />,
            },
            {
              path: "/stocks/update",
              element: <StocksForm />,
            },
            {
              path: "/bills",
              element: <Navigate to={'/bills/retail'} />,
            },
            {
              path: "/bills/new",
              element: <BillsForm />,
            },
            {
              path: "/bills/view",
              element: <BillsView />,
            },
            {
              path: '/bills/:billType/report',
              element: <BillsReport />
            },
            {
              path: "/bills/update/:bill_id",
              element: <BillsForm />,
            },
            {
              path: "/bills/:billType",
              element: <Bills />,
            },
            {
              path: "/clients",
              element: <Clients />,
            },
            {
              path: '/purchases',
              element: <Purchases />
            },
            {
              path: "/analytics",
              element: <Analytics />,
            },
            {
              path: '/purchases/new',
              element: <PurchaseForm />
            },
            {
              path: '/purchases/update',
              element: <PurchaseForm />
            }
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
