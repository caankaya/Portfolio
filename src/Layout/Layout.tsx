import { Outlet } from "react-router-dom";

// Components
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout() {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
