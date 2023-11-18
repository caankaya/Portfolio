import { Outlet } from "react-router-dom";

// Components
import Header from "../Header/Header";

function Layout() {
  return (
    <div className="body min-h-full max-w-6xl m-auto p-4 relative">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
