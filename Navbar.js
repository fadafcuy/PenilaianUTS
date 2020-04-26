import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  Logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("id_user");
    localStorage.removeItem("role");
    window.location = "/login";
  };

  navGuest = () => {
    return(
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/productclient" className="nav-item nav-link text-light mr-4">Produk</Link>
          </li>
          <li>
            <Link to="/login" className="nav-item nav-link text mr-4">Login</Link>
          </li>
        </ul>
      </div>
    )
  }

  navAdmin = () => {
    return(
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Member" className="nav-item nav-link text-dark mr-3">Member</Link>
          </li>
          <li className="nav-item">
            <Link to="/Lapangan" className="nav-item nav-link text-dark mr-4">Lapangan</Link>
          </li>
          <li className="nav-item">
            <Link to="/Sewa" className="nav-item nav-link text-dark mr-4">Sewa</Link>
          </li>
          <li className="nav-item">
            <Link to="/profil" class="nav-item nav-link text-dark ml-auto">My Profil</Link>
          </li>
          
        </ul>
        <a class=" text-white btn btn-danger ml-auto" onClick={this.Logout} >Logout</a>
      </div>

    )
  }

  navUser = () => {
    return(
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Home" className="nav-item nav-link text-dark mr-4">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/profil" className="nav-item nav-link text-dark mr-4">Profil</Link>
          </li>
        </ul>
        <a class=" text-white btn btn-danger ml-auto" onClick={this.Logout} >Logout</a>
      </div>
    )
  }
  render() {
    let auth = localStorage.getItem("Token")
    let role = localStorage.getItem("role")
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-white">
          <a className="navbar-brand text-dark font-weight-bold ">𝕊𝕡𝕠𝕣𝕥.𝕚𝕟𝕔</a>
        <button className="navbar-toggler btn-light" type="button" data-toggle="collapse" 
        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
          <span className="navbar navbar-toggler-icon"></span>
        </button><br></br>
        { !auth ? this.navGuest() : role === "admin" ? this.navAdmin() : this.navUser() }
      </nav>
      </div>

    );
  }
}

export default Navbar;
