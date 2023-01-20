import React from "react";

import "./navbar.css";
import logoIBIK from "../../assets/img/logoIBIK.png";
import profileIcon from "../../assets/img/profileIcon.png";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function navbarMain() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar" id="navbar-bg">
        <div className="container-fluid">
          <Link to={"/homePage"} style={{ textDecoration: "none" }}>
            <a className="navbar-brand" style={{ color: "white" }}>
              <img
                src={logoIBIK}
                alt="logoIBIK"
                className="logoIBIK-navbar"
              ></img>
              <a className="titleNavbar">
                <i>E-Book</i> IBI Kesatuan
              </a>
            </a>
          </Link>
          <div className="d-flex justify-content-center">
            <div
              className="collapse navbar-collapse navbar-submenu"
              id="navbarTogglerDemo03"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active style-submenu"
                    aria-current="page"
                    to={"/homePage"}
                    style={{ color: "white" }}
                  >
                    Beranda
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active style-submenu"
                    aria-current="page"
                    to={"/aboutUs"}
                    style={{ color: "white" }}
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active style-submenu"
                    aria-current="page"
                    to={"/katalog"}
                    style={{ color: "white" }}
                  >
                    Katalog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active style-submenu"
                    aria-current="page"
                    to={"/contactUs"}
                    style={{ color: "white" }}
                  >
                    Hubungi Kami
                  </Link>
                </li>

                {/* <li class="nav-item">
                  <p
                    className="nav-link active style-submenu"
                    aria-current="page"
                    href="#"
                    style={{ color: "white" }}
                  >
                    <b>
                    Mochammad Ilhamsyah Maulana
                    </b>
                  </p>
                </li>
                <li class="nav-item">
                  <p
                    className="nav-link active style-submenu"
                    aria-current="page"
                    href="#"
                    style={{ color: "white" }}
                  >
                  <img src={profileIcon} className="profileIcon" />
                  </p>
                </li> */}
              </ul>
            </div>
            <div className="search-bar">
              <a className="sekat">|</a>
              <Link to={"/"}>
                <button className="btn btn-outline-light logout-btn">
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbarMain;
