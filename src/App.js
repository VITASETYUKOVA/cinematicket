import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import TodoPage from "./components/TodoPage";
import HomePage from "./components/HomePage";
import { moviesLoader } from "./loader/moviesLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: moviesLoader,
      },
      {
        path: "/todo",
        element: <TodoPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}