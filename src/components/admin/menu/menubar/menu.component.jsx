import { Link } from "react-router-dom";

export function AdminMenu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/home" className="btn">Home</Link>
          </li>
          <li class="nav-item active">
            <Link to="/about" className="btn">About</Link>
          </li>
          <li class="nav-item active">
            <Link to="/contact" className="btn">Contact US</Link>
          </li>
          <li class="nav-item active">
            <Link to="/add-property-type" className="btn">Add Property Type</Link>
          </li>
          <li class="nav-item active">
            <Link to="/property-types" className="btn">Property Types</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
