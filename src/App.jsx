import Dashboard from "./Components/Dashboard";
import AsideNavbar from "./Components/AsideNavbar";
import Header from "./Components/Header";
const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <AsideNavbar />
        <Dashboard />
      </div>
    </>
  );
};

export default App;
