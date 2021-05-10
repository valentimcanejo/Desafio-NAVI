import React, { useState } from "react";
import logo from "../image/logo.svg";
import logoName from "../image/nome-hackaton.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Login, { googleSuccess } from "./Login";

const Navbar = () => {

  const history = useHistory();


  const Logout = async (response) => {
    console.log(response);
    history.push("/auth");
    alert("Logout feito com sucesso");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a href="#">
            <img className="logo" src={logo} alt="logo..." />
            <img className="logo-name" src={logoName} alt="logoName..." />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#objetivos">
                  Objetivos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#eventos">
                  O evento
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#inscricoes">
                  Inscrições
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#info">
                  Informações
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#info">
              <GoogleLogout
                clientId="83656149699-rdikfecitstoasn830p37kehfv6evojs.apps.googleusercontent.com"
                render={renderProps => (
                  <button onClick={renderProps.onClick} 
                  disabled={renderProps.disabled} 
                  style={{ 
                    backgroundColor: '#0D0030', 
                    border:'none', 
                    color:'white', 
                    fontFamily:'Lexend Exa, sans-serif', 
                    fontSize:'16px',
                    fontWeight: 500,          
                    letterSpacing: '0.0375rem'
                  }}>LOGOUT</button>
                )}
                buttonText="Google Logout"
                onLogoutSuccess={Logout}
              ></GoogleLogout>
              
            <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "#fff", marginTop: '1px', marginLeft: '5px' }} />
            </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;