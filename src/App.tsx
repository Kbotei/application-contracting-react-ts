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
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/" style={style}>
          Home
        </NavLink>
        <NavLink to="/scholarship" style={style}>
          Scholarship
        </NavLink>
      </nav>

      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};
