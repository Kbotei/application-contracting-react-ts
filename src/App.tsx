import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Routes,
  Route,
  Outlet,
  NavLink,
  type NavLinkRenderProps,
} from "react-router";
import { Home } from "./pages/home";
import Scholarship from "./pages/applications/scholarship";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="scholarship" element={<Scholarship />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;

const Layout = () => {
  const style = ({ isActive }: NavLinkRenderProps) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <>
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col bg-secondary-subtle text-center">
            <nav className="nav flex-column p-3">
              <NavLink to="/" className={"nav-link"} style={style}>
                Home
              </NavLink>
              <NavLink to="/scholarship" className={"nav-link"} style={style}>
                Scholarship
              </NavLink>
            </nav>
          </div>
          <div className="col-8">
            <main className="p-3">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};
