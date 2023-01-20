import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../Auth";
import { useNavigate } from "react-router-dom";
import logoIBIK from "../../assets/img/logoIBIK.png";
import "./LoginPage.css";

function LoginPage() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  // const handleLogin = () => {
  //   auth.login(user);
  //   useNavigate=('/');
  // }
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card card-login" style={{ width: "18rem" }}>
          <div className="card-body ">
            <center>
              <p className="card-text">Login</p>
              <p className="card-text">
                <i>E-Book</i> IBI Kesatuan
              </p>
              <img src={logoIBIK} alt="Logo IBIK" className="LogoIBIK" />
            </center>
            <div className="col input-area">
              <label className="form-label">NPM</label>
              <input
                type="number"
                placeholder="Masukkan NPM"
                className="form-control form-control-sm"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="col input-area">
              <label className="form-label">Password</label>
              <input
                type="text"
                placeholder="Masukkan Password"
                className="form-control form-control-sm"
              />
            </div>
            <div className="btn-submit">
              <center>
                <Link to={"/homePage"}>
                  <button
                    style={{ backgroundColor: "#663399", color: "white" }}
                    className="btn btn-md"
                    // onClick={handleLogin}
                  >
                    Login
                  </button>
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
