import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import aldiney from "../image/aldiney.svg";
import janaina from "../image/janaina.svg";
import joao from "../image/joao.svg";
import fernando from "../image/fernando.svg";
import melise from "../image/melise.svg";
import mauricio from "../image/mauricio.svg";
const Info = () => {
  return (
    <>
      <section className="info" id="info">
        <div className="container container-info">
          <div className="row justify-content-between">
            <div className="col-10">
              <h2 className="h2-info text-break">INFORMAÇÕES DE APOIO</h2>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6">
              <h3 className="h3-info">Introdução à Causa Básica do Óbito</h3>
              <p>
                Todos os dias milhares de mortes são registradas no Brasil. Para
                simplificar o registro desses óbitos, foi criado o sistema de
                Codificação das Causas Básicas do Óbito. Ele serve para que seja
                possível identificar a causa primária da morte de uma pessoa,
                como por exemplo uma doença ou uma arma.
              </p>
              <p>
                Dessa forma, a utilização da codificação do óbito se amplia
                exponencialmente e é identificada como uma demanda permanente do
                sistema de saúde. Sendo natural que a codificação do óbito passe
                a ser uma tarefa institucional primordial a ser assumida
                organicamente pelo Sistema Único de Saúde.
              </p>
              <h3 className="h3-info">Objetivo</h3>
              <p>
                Construir soluções inovadoras que auxiliem na codificação da
                causa básica do óbito que compõem o Sistema Seletor de Causa
                Básica de Óbito.
              </p>
              <h3 className="h3-info">Regulamento do evento</h3>
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{ color: "#FF7513" }}
              />
              <a href="">CONFERIR REGULAMENTO COMPLETO</a>
            </div>

            <div className="col-md-5">
              <h3 className="h3-info">Eixos temáticos</h3>
              <p>
                <strong>
                  1 - Tecnologias para melhoramento na codificação da causa
                  básica do óbito:
                </strong>
              </p>
              <p>
                Propor soluções inovadoras que auxiliem a codificação da causa
                do óbito, incluindo validação da codificação especificada e
                propor a codificação mais acurada da CBO se necessário.
              </p>
              <p>
                <strong>
                  2 - Desenvolvimento de Sistemas de Recomendação em CBO:
                </strong>
              </p>
              <p>
                Propor sistemas de recomendação baseados em histórico de
                codificação da causa do óbito, que atuem como assistentes
                virtuais dos profissionais em CBO, a partir de modelos
                preditivos especializados na Classificação Internacional de
                Doenças e Problemas Relacionados à Saúde (CID-10).
              </p>
              <p>
                <strong>
                  3 - Tecnologias para Treinamento de Profissionais em CBO:
                </strong>
              </p>
              <p>
                Propor recursos educacionais abertos que auxiliem no processo de
                formação dos profissionais em CBO, incluindo simuladores da
                codificação de DO “Declaração de óbito”, jogos sérios ou
                objetivos de aprendizagem como foco em codificação da causa
                básica do óbito..
              </p>
              <p>
                A declaração de óbito é composta por campos informativos como
                Idade, Sexo, setor laboral, e pricipalmente doenças ou agravos
                que levaram a pessoa ao óbito. Este último é chamado Bloco V, é
                dele que o codificador retira as informações necessária para
                codificar a causa básica do óbito.{" "}
              </p>
              <p>
                Aqui pretende-se buscar tecnologia que simula esse processo de
                codificação e auxilie a memorização das regras .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="comissao">
        <div className="container container-comissao">
          <h3 className="h3-com text-break">COMISSÃO ORGANIZADORA</h3>
          <div className="row">
            <img className="premios-img img-fluid" src={aldiney} />
            <img className="premios-img img-fluid" src={janaina} />
            <img className="premios-img img-fluid" src={joao} />
            <img className="premios-img img-fluid" src={fernando} />
            <img className="premios-img img-fluid" src={melise} />
            <img className="premios-img img-fluid" src={mauricio} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;