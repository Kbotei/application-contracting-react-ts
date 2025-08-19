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
  const navClasses = ({ isActive }: NavLinkRenderProps) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <>
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink to="/" className={navClasses}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/scholarship" className={navClasses}>
                        Scholarship
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col">
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
