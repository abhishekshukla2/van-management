import "./Navbar.css";

function Navbar() {

  return (
    <nav className="navbar">

      <div className="logo">
        🚐 Van Management
      </div>

      <ul className="nav-menu">
        <li>Dashboard</li>
        <li>Students</li>
        <li>Drivers</li>
        <li>Vans</li>
        <li>Reports</li>
      </ul>

    </nav>
  );
}

export default Navbar;