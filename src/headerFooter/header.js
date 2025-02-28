import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./header.css"; // Custom CSS

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="header-logo" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links & Search */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <div className="nav-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Search Box */}
            <form className="d-flex search-box">
              <input className="form-control" type="search" placeholder="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
