import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">Nguvu ya Mtaa</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Nyumbani</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Mradi</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/public-donate">Changia</Link></li>
            {isAdmin && <li className="nav-item"><Link className="nav-link" to="/donate">Admin Donate</Link></li>}
            <li className="nav-item"><Link className="nav-link" to="/dashboard">Michango</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reports">Ripoti</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Wasiliana</Link></li>
            {isAdmin ? (
              <li className="nav-item"><button className="btn btn-warning ms-2" onClick={handleLogout}>Logout</button></li>
            ) : (
              <li className="nav-item"><Link className="nav-link" to="/admin-login">Admin</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
