import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import foguete from "../image/foguete1.svg";
import navi from "../image/navi-logo.svg";
import ifLogo from "../image/if-logo.svg";
import funcern from "../image/funcern.svg";
import c4bo from "../image/c4bo.svg";

const Inscricoes = () => {
  return (
    <>
      <section className="inscrições" id="inscricoes">
        <div className="container container-insc">
          <div className="row justify-content-between ">
            <div className="col-md-5">
              <h2 className="h2-insc text-break">PARTICIPE!</h2>
              <span className="span-insc">Fique ligado(a) nas regras</span>
              <p className="p-insc">Inscrições de 02/11/2020 a 09/11/2020</p>
              <p>
                Para se inscrever, é preciso preencher o formulário de
                inscrição, onde poderão participar equipes de 4 (quatro)
                membros, devendo ser organizadas preferencialmente da seguinte
                forma: - 1x Perfil Business, 2x Hackers (Desenvolvedores) e 1x
                UX/UI (Design).
              </p>
              <p>
                <strong>Obs:</strong> Os membros da equipe deverão estar com
                matrícula ativa em instituição pública ou privada de ensino,
                podendo ser nos níveis: médio, curso técnico, graduação ou
                pós-graduação.
              </p>
              <p>
                <strong>Canal para dúvidas: </strong>hackathon@navi.ifrn.edu.br
              </p>
              <a href="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: 40, color: "#0D0030" }}
                />{" "}
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ fontSize: 40, marginLeft: 30, color: "#0D0030" }}
                />
              </a>
            </div>
            <div className="col-md-6">
              <div className="foguete-img justify-content-center">
                <img className="img-fluid" src={foguete} />

                <button className="button-card-insc text-break">
                  QUERO ME INSCREVER
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="rodape">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="parceiros">
                <img className="img-fluid img-parc" src={navi} />
                <img className="img-fluid img-parc" src={ifLogo} />
                <img className="img-fluid img-parc" src={funcern} />
                <img className="img-fluid img-parc" src={c4bo} />
              </div>
            </div>
            <div className="col-12">
              <div>
                <p className="text-rodape">
                  © 2020 Núcleo Avançado de Inovação Tecnológica, Todos os
                  Direitos Reservados
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Inscricoes;