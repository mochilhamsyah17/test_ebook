import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BeforeLogin.css";

import book1 from "../../assets/img/bookSI1.jpg";
import book2 from "../../assets/img/bookSI2.jpg";
import book3 from "../../assets/img/bookSI3.jpg";
import searchIcon from "../../assets/img/searchIcon.png";

import logoIBIK from "../../assets/img/logoIBIK.png";
import { API_URL } from "../API";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export { API_URL } from "../API";

function BeforeLogin() {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // search filter
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <div className="e-book-jurusan">
        <center>
          <p>
            <h3>
              <b>
                <i>Explore Your Knowledge</i>
              </b>
            </h3>
          </p>
        </center>
      </div>

      {/* SearchBar */}
      <div className="e-book-jurusan" id="searchBar">
        <p id="titleCariBuku">
          <img src={searchIcon} style={{ paddingBottom: "1vh" }} />
          <b> Cari Buku</b>
        </p>
        <form className="">
          <input
            type="search"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Masukkan Nama Buku"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      {/* //Konten */}
      <div className="popup" id="popup">
        <center>
          <div className="card card-alert">
            <div className="card-body">
              <div className="close-btn">
                <a
                  href="#unpopup"
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  x
                </a>
              </div>
              <center>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  className="bi bi-exclamation-triangle"
                  viewBox="0 0 16 16"
                  color="#ff3232"
                >
                  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                </svg>
              </center>
            </div>

            <div className="card-body">
              <p className="alert-title">
                Harap Login untuk Lihat selengkapnya !
              </p>
              <Link to={"/login"}>
                <div
                  className="btn"
                  style={{ backgroundColor: "rebeccapurple", color: "white" }}
                >
                  Login
                </div>
              </Link>
            </div>
          </div>
        </center>
      </div>

      <center>
        <div className="container templateCard">
          <div className="row gy-4 my-4">
            {books
              .filter((book) => {
                return search.toLowerCase() === ""
                  ? book
                  : book.namaBuku.toLowerCase().includes(search);
              })
              .map((book) => (
                <div className="col-md-3" key={book.id}>
                  <div className="card" id="card-buku">
                    <img
                      src={book.img}
                      className="card-img-top ImgSize"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{book.namaBuku}</h5>
                      <div className="d-flex flex-column size-deskripsi-card">
                        <a>Seri : {book.seri}</a>
                        <a>Tahun buku : {book.tahunTerbit}</a>
                      </div>
                      <div>
                        <center>
                          <button
                            className="btn btn-outline-light btn-md button-lihat"
                            style={{ backgroundColor: "#663399" }}
                            onClick={() => navigate(`dataBuku/${book.id}`)}
                          >
                            <Link
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Lihat Selengkapnya !
                            </Link>
                          </button>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </center>
    </>
  );
}

export default BeforeLogin;
