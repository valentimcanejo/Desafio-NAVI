import React from "react";
import setas from "../image/setas.svg";

const Main = () => {
  return (
    <main>
      <section className="main">
        <div className="container mainContainer">
          <div className="row row-hack">
            <div className="col">
              <h1 className="hack-name text-break">HACKATHON</h1>
              <span className="obito">CAUSA BÁSICA DO ÓBITO</span>
              <br></br>
              <span className="codificar">Codificar é preciso!</span>
            </div>
            
          </div>
          <img src={setas} className="setas img-fluid" />

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card-cod">
                <h2 className="h2-card text-break">CODIFICAR É PRECISO!</h2>
                <p className="p-card text-break">
                  O objetivo do nosso Hackathon Causa Básica do Óbito é
                  construir soluções inovadoras que auxiliem no registro das
                  causas básica de óbitos no Brasil, que compõem o Sistema
                  Seletor de Causa Básica de Óbito.
                </p>
                <button className="button-card text-break">
                  QUERO PARTICIPAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;