import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav id="sidenav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/users" className="nav-link">
          Users
        </NavLink>
        <NavLink to="/posts" className="nav-link">
          Posts
        </NavLink>
      </nav>

      <div className="root-layout">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
