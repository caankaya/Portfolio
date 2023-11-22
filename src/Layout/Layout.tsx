import { Outlet } from "react-router-dom";

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="body min-h-full max-w-6xl m-auto p-4 relative ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
