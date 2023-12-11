// import "./navbar.styles.scss";

import Login from "../Login/login.component";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/images/MarkupTag-white-logo.png"
            alt="Logo"
            className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                View More
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Web Designing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Android Development
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </button>
              <ul
                className="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton"
              >
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Product One
                  </a>
                </li> */}
                <li className="w-100">
                  <Login />
                </li>
              </ul>
            </div>
            <button className="btn btn-light ms-3">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
