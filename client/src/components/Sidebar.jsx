import { Link } from "react-router-dom";
import "./Sidebar.css";


function Sidebar() {

  return (

    <aside className="sidebar">

      <h3>🚐 Menu</h3>


      <ul>

        <li>
          <Link to="/">
            🏠 Dashboard
          </Link>
        </li>


        <li>
          <Link to="/students">
            👨‍🎓 Students
          </Link>
        </li>


        <li>
          <Link to="/vans">
            🚐 Vans
          </Link>
        </li>


        <li>
          <Link to="/drivers">
            👨‍✈️ Drivers
          </Link>
        </li>


        <li>
          <Link to="/routes">
            📍 Routes
          </Link>
        </li>


        <li>
          <Link to="/reports">
            📊 Reports
          </Link>
        </li>


      </ul>


    </aside>

  );

}


export default Sidebar;