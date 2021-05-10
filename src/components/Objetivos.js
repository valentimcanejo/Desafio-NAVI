import React from "react";
import objetivoUm from "../image/simbolo1-obj.svg";
import objetivoDois from "../image/simbolo2-obj.svg";
import objetivoTres from "../image/simbolo3-obj.svg";
import objetivoQuatro from "../image/simbolo4-obj.svg";
import objetivoCinco from "../image/simbolo5-obj.svg";
import objetivoSeis from "../image/simbolo6-obj.svg";

const Objetivos = () => {
  return (
    <section className="main-objetivos" id="objetivos">
      <div className="container objetivos-container">
        <div className="row">
          <h1 className="h1-obj">OBJETIVOS</h1>
        </div>
        <div className="grid-container text-break">
          <div className="grid-item">
            <img src={objetivoUm} className="img-fluid" />
            <h3 className="h3-obj">Fomento à inovação</h3>
            <p className="p-obj">
              Desenvolver uma cultura de inovação e criação de novas ideias para
              solucionar problemas presentes em nossa sociedade
            </p>
          </div>
          <div className="grid-item">
            <img src={objetivoDois} className="img-fluid" />
            <h3 className="h3-obj">Fonte de aprendizado</h3>
            <p className="p-obj">
              Oportunidade de aprendizado para todos os participantes, pois cada
              atividade estimula a criatividade e se transforma em conhecimento
            </p>
          </div>
          <div className="grid-item">
            <img src={objetivoTres} className="img-fluid" />
            <h3 className="h3-obj">Aceleração de ideias</h3>
            <p className="p-obj">
              Surgimento de ideias incríveis que poderão se tornarem projetos de
              grande impacto na vida de muitas pessoas direta ou indiretamente.
            </p>
          </div>
          <div className="grid-item">
            <img src={objetivoQuatro} className="img-fluid" />
            <h3 className="h3-obj">Trabalho em equipe</h3>
            <p className="p-obj">
              Interação entre participantes de multidisciplinas, que poderão
              trabalhar juntos e aprenderem coisas novas
            </p>
          </div>
          <div className="grid-item">
            <img src={objetivoCinco} className="img-fluid" />
            <h3 className="h3-obj">Desafio</h3>
            <p className="p-obj">
              Promover desafios como esse, faz com que jovens e adultos se
              desafiem e possam até mesmo dar o próximo passo em suas carreiras
            </p>
          </div>
          <div className="grid-item">
            <img src={objetivoSeis} className="img-fluid" />
            <h3 className="h3-obj">Implementação de projetos</h3>
            <p className="p-obj">
              Incentivar a implementação de projetos que estão guardados ou que
              precisam ser melhorados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objetivos;