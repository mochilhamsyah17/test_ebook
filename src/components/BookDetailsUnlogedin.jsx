import React, { useState, useEffect } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useParams } from "react-router";
import axios from "axios";
import { API_URL } from "./API";
import "./BookDetails.css";
import { useNavigate } from "react-router";

import UnlogedinNavbarMain from "./Navbar/NavbarBeforeLogin";
import { Link } from "react-router-dom";

function BookDetailsUnlogedin() {
  //hooks untuk data buku
  const [book, setBook] = useState({});
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  //hooks untuk display file pdf
  const [numPage, setNumPages] = useState(null);

  function onDocumnetLoadSuccess({ numPages }) {
    setNumPages(numPage);
    setPageNumber(1);
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <UnlogedinNavbarMain />
      <div className="container bookDetails">
        <div>
          <center>
            <img className="imgBook" src={book?.img} alt="#" />
          </center>
        </div>
        <div className="judul-book-details">
          <div className="row" id="judulBuku">
            <center>
              <h3>{book?.namaBuku}</h3>
            </center>
          </div>
          <div className="container d-flex flex-row">
            <ul>
              <div>
                <p>Pengarang</p>
              </div>
              <div>
                <p>Jumlah Halaman</p>
              </div>
              <div>
                <p>Tinggi Buku</p>
              </div>
              <div>
                <p>Seri</p>
              </div>
              <div>
                <p>Tahun Terbit</p>
              </div>
              <div>
                <p>Terbitan</p>
              </div>
              <div>
                <p>Kelompok Pembaca</p>
              </div>
            </ul>

            <ul>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
            </ul>
            <ul>
              <div>
                <p>{book?.pengarang}</p>
              </div>
              <div>
                <p>{book?.jumlahHalaman} Halaman</p>
              </div>
              <div>
                <p>{book?.tinggiBuku} cm</p>
              </div>
              <div>
                <p>{book?.seri}</p>
              </div>
              <div>
                <p>{book?.tahunTerbit}</p>
              </div>
              <div>
                <p>{book?.terbitan}</p>
              </div>
              <div>
                <p>{book?.kelompokPembaca}</p>
              </div>
            </ul>

            <ul id="">
              <div>
                <p>Jenis Pustaka</p>
              </div>
              <div>
                <p>Kategori Jenis</p>
              </div>
              <div>
                <p>Terbitan</p>
              </div>
              <div>
                <p>Media</p>
              </div>
              <div>
                <p>ISBN Susulan</p>
              </div>
              <div>
                <p>Pengajuan KDT</p>
              </div>
              <div>
                <p>Kategori Buku</p>
              </div>
            </ul>
            <ul>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
              <div>
                <p>:</p>
              </div>
            </ul>

            <ul>
              <div>
                <p>{book?.jenisPustaka}</p>
              </div>
              <div>
                <p>{book?.kategoriJenis}</p>
              </div>
              <div>
                <p>{book?.terbitan}</p>
              </div>
              <div>
                <p>{book?.media}</p>
              </div>
              <div>
                <p>{book?.ISBNsusulan}</p>
              </div>
              <div>
                <p>{book?.pengajuanKDT}</p>
              </div>
              <div>
                <p>{book?.kategoriBuku}</p>
              </div>
            </ul>
          </div>
          <center>
            <button
              className="btn btn-outline-light btn-lg btn-block"
              style={{ backgroundColor: "#663399" }}
            >
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Baca E-Book
              </Link>
            </button>
          </center>
        </div>
      </div>

      <div className="card" id="card-deskripsi">
        <div className="card-body">
          <p className="card-text">
            <b>Sinopsis</b>
          </p>
          <a>{book?.sinopsis}</a>
        </div>
      </div>

      <center>
        <div
          className="viewer embed-responsive embed-responsive-16by9"
          id="popup"
        >
          {/* <Viewer fileUrl={book?.fileBook} plugins={[defaultLayoutPluginInstance]}></Viewer> */}
          <div className="close-btn-popup">
            <a href="#unpop" style={{ textDecoration: "none", color: "white" }}>
              x
            </a>
          </div>
          <iframe
            className="view-pdf"
            // src={book?.fileBook + "#toolbar=0"}
            frameborder="0"
          ></iframe>
        </div>
      </center>

      <br />

      <center>
        {/* BUKU LAINNYA */}
        <div className="carousel-book">
          <p>
            <h4>
              <b>Buku Lainnya</b>
            </h4>
          </p>
        </div>

        <div className="container templateCard">
          <div className="row gy-4 my-4">
            {books.slice().map((book) => (
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
                      <a>Jurusan : {book.seri}</a>
                      <a>Tahun buku : {book.tahunTerbit}</a>
                    </div>
                    <div>
                      <center>
                        <button
                          className="btn btn-outline-light btn-md button-lihat"
                          style={{ backgroundColor: "#663399" }}
                          onClick={() => navigate(`../login`)}
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

export default BookDetailsUnlogedin;
