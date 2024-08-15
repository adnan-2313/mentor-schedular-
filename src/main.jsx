import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./Components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentHome from "./Components/Student/StudentHome";
import ScheduleMentor from "./Components/Student/ScheduleMentor";
import MentorHome from "./Components/MentorHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/student",
    element: <ScheduleMentor/>,
  },
  {
    path: "/studentDashboard",
    element: <StudentHome />,
  },
  {
    path: "/mentor",
    element: <MentorHome />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
