import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./Components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import StudentHome from "./Components/Student/StudentHome";
import ScheduleMentor from "./Components/Student/ScheduleMentor";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/student",
    element: <App />,
  },
  {
    path: "/studentDashboard",
    element: <StudentHome />,
  },
  {
    path: "/scheduleMentor",
    element: <ScheduleMentor />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
