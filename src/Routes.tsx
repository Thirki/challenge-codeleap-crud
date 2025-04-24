import { createBrowserRouter } from "react-router-dom";
import { HomePage, NotFoundPage, Posts } from "./pages";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/posts", element: <Posts /> },
  { path: "*", element: <NotFoundPage /> },
]);
