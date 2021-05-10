import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import logo from "../image/logo.svg";
import logoName from "../image/nome-hackaton.svg";

const Login = () => {
  const [name, setName] = useState("");

  const history = useHistory();
      
  const googleSuccess = async (response) => {
    alert('Login efetuado com sucesso')
    history.push("/");
    console.log('Login bem sucedido, usuário atual: ', response.profileObj);
  };
  

  const googleFailure = (error) => {
    
    console.log(error);
    console.log("Google error");
  };
  return (
    <section className="login">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card-hacka card-signin my-5">
              <div class="card-body">
                <img className="logo" src={logo} alt="logo..." />
                <img className="logo-name" src={logoName} alt="logoName..." />
                <h5 class="card-title text-center text-white">Login</h5>
                <form class="form-signin">
                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      placeholder="Email"
                      required
                      autofocus
                    ></input>
                    <label for="inputEmail">Email</label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Senha"
                      required
                    ></input>
                    <label for="inputPassword">Senha</label>
                  </div>

                  <div class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    ></input>
                    <label
                      class="custom-control-label text-white"
                      for="customCheck1"
                    >
                      Lembrar senha
                    </label>
                  </div>
                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Login
                  </button>

                  <div
                    className="btn btn-lg btn-block text-uppercase"
                    type="submit"
                  >
                    <GoogleLogin
                      clientId="83656149699-rdikfecitstoasn830p37kehfv6evojs.apps.googleusercontent.com"
                      
                      buttonText="Login com Google"
                      onSuccess={googleSuccess}
                      onFailure={googleFailure}
                      cookiePolicy="single_host_origin"
                      isSignedIn={true}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;