import { NavBar, Footer } from "./Components";
import { Outlet } from "react-router-dom";

function App({ navBackground }) {
  return (
    <div className="App">
      <NavBar background={navBackground} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
