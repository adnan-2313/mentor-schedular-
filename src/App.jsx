import StudentHome from "./Components/Student/StudentHome";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <StudentHome />
      <Outlet />
    </>
  );
};

export default App;
