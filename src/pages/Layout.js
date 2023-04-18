import React from "react";
import { Link } from "react-router-dom";
export function NavBar(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Web App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/users" >Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export function Footer(){
    return(
        <footer>
            <div>
                <small className="d-block text-muted text-center">&copy; 2023</small>
            </div>
        </footer>
    );
}