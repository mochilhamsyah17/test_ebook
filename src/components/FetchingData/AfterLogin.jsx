import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AfterLogin.css";
import "../Navbar/navbar.css";
import logoIBIK from "../../assets/img/logoIBIK.png";
import book1 from "../../assets/img/bookSI1.jpg";
import book2 from "../../assets/img/bookSI2.jpg";
import book3 from "../../assets/img/bookSI3.jpg";
import searchIcon from "../../assets/img/searchIcon.png";
import { API_URL } from "../API";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export { API_URL } from "../API";

function AfterLogin() {
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

      {/* searchbar */}
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

      {/* 
//Konten */}
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
                            Lihat Selengkapnya !
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

export default AfterLogin;
