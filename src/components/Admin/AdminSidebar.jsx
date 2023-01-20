import React from "react";
import "./AdminSidebar.css";
import { API_URL } from "../API";

function AdminSidebar() {
  return (
    <>
      <div className="d-flex flex-row">
        <nav
          style={{ backgroundColor: "rebeccapurple" }}
          className="navbar navbar-admin navbar-expand d-flex flex-column align-item-start"
          id="sidebar"
        >
          <a href="" className="navbar-brand text-light mt-5">
            <div className="display-7 font-weight-bold">
              <b>Admin E-Book IBIK</b>
            </div>
          </a>
          <ul className="navbar-nav d-flex flex-column mt-5 w-100">
            <li className="nav-item w-100">
              <a href="" className="nav-link text-light">
                Data Buku
              </a>
            </li>
            <li className="nav-item w-100">
              <a href="" className="nav-link text-light">
                Menu 2
              </a>
            </li>
            <li className="nav-item w-100">
              <a href="" className="nav-link text-light">
                Menu 3
              </a>
            </li>
          </ul>
        </nav>
        <div className="content-admin">
          <div className="title-admin">Dashboard</div>
          <div className="d-flex flex-row">
            <div className="content-admin">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Informasi Produk</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Total Buku</li>
                  <li className="list-group-item">Total Buku</li>
                  <li className="list-group-item">Total Buku</li>
                </ul>
              </div>
              <div className="container templateCard">
                <div className="row gy-4 my-4">
                  <div className="col-md-3">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title"></h5>
                        <div className="d-flex flex-column size-deskripsi-card">
                          <a>Jurusan : </a>
                          <a>Tahun buku : </a>
                        </div>
                        <div>
                          <center>
                            <button
                              className="btn btn-outline-light btn-md button-lihat"
                              style={{ backgroundColor: "#663399" }}
                            >
                              <a
                                href="#popup"
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                Lihat Selengkapnya !
                              </a>
                            </button>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
