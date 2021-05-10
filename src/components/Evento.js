import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import premios from "../image/podium.svg"
const Evento = () => {
    return (
    <>
        <section className="eventos" id="eventos">
        <div className="container eventos-container">
            <div className="row">
                <h2 className="h2-eve text-break">
                    FASES DO EVENTO
                </h2>
            </div>
            <div className="row">
                <div className="col-md-8 col-sm-10">
                    <div className="fases concluida">
                    <h3 className="h3-eve text-break">PERÍODO DE INSCRIÇÕES</h3>
                    <p className="p-data">
                        02/11/2020 a 13/11/2020
                    </p>
                    <p>Para se inscrever, é preciso preencher o formulário 
                        de inscrição, onde poderão participar equipes de 2 
                        até 4 (quatro) membros, em forma de sugestão ter os 
                        seguintes perfis: - Perfil Business (perfil voltado 
                        ao produto ou da área da saúde) - Hacker (Desenvolvedor)
                        - UX/UI (Design).
                    </p>
                    <p>
                        <strong>Obs:</strong> Os membros da equipe deverão 
                        estar com matrícula ativa em instituição pública ou 
                        privada de ensino, podendo ser nos níveis: médio,
                        curso técnico, graduação ou pós-graduação.
                    </p>
                    <p>
                        <strong>Canal para dúvidas: </strong>hackathon@navi.ifrn.edu.br
                    </p>
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#007bff" }}/>
                    <a href=""><u>INSCREVA-SE AQUI!</u></a>
                    </div>
                    <div className="fases concluida">
                    <h3 className="h3-eve text-break">LIVE DE ABERTURA</h3>
                    <p className="p-data">
                        14/11/2020 às 20h
                    </p>
                    <p>Live que dará início ao evento. Já marque em sua agenda para não esquecer! 
                    </p>
                    </div>
                    <div className="fases concluida">
                    <h3 className="h3-eve text-break">ETAPA 1: BRAINSTORMING E IDEAÇÃO</h3>
                    <p className="p-data">
                        14/11/2020 a 19/11/2020
                    </p>
                    <p>A equipe participante deverá enviar um link de vídeo (ex: youtube)
                        por meio do link abaixo. O vídeo deve ser em formato de pitch com 
                        duração de até 3min descrevendo a proposta de solução.
                    </p>
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#007bff" }}/>
                    <a href=""><u>ENVIAR PROPOSTA</u></a>
                    </div>
                    <div className="fases">
                    <h3 className="h3-eve text-break">RESULTADO DA ETAPA 1: BRAINSTORMING E IDEAÇÃO</h3>
                    <p className="p-data">
                        23/11/2020
                    </p>
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#007bff" }}/>
                    <a href=""><u>RESULTADO ETAPA 1</u></a>
                    </div>
                    <div className="fases">
                    <h3 className="h3-eve text-break">ETAPA 2: PROTOTIPAÇÃO DA SOLUÇÃO</h3>
                    <p className="p-data">
                        21/11/2020 a 26/11/2020
                    </p>
                    <p>A equipe participante deverá produzir um protótipo de média fidelidade 
                        e enviar um link de vídeo (ex: youtube) por meio do link abaixo. O 
                        vídeo deve ter duração de até 2min explicando o protótipo desenvolvido.
                    </p>
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#007bff" }}/>
                    <a href=""><u>ENVIA APRESENTAÇÃO</u></a>
                    </div>
                    <div className="fases">
                    <h3 className="h3-eve text-break">RESULTADO DA ETAPA 2: PROTOTIPAÇÃO DA SOLUÇÃO</h3>
                    <p className="p-data">
                        28/11/2020
                    </p>
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#007bff" }}/>
                    <a href=""><u>RESULTADO ETAPA 2</u></a>
                    </div>
                    <div className="fases">
                    <h3 className="h3-eve text-break">ETAPA FINAL: APRESENTAÇÃO DO MVP E PREMIAÇÃO</h3>
                    <p className="p-data">
                        30/11/2020
                    </p>
                    <p>A equipe participante deverá enviar um link de vídeo (ex: youtube) 
                        por meio do link abaixo. O vídeo deve ser em formato de pitch e 
                        ter duração de até 2min explicando o MVP (Produto Mínimo Viável).
                        Além disso, deve também disponibilizar os arquivos da solução 
                        proposta através de pastas na nuvem (ex: github, google drive...).
                    </p>
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ color: "#007bff" }}/>
                    <a href=""><u>ENVIAR PROJETO</u></a>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="premios">
        <div className="col-12">
            <div className="container">
                <h2 className="h2-premios">PRÊMIOS INCRÍVEIS</h2>
                <div className="container text-center">
                    <img className="premios-img img-fluid" src={ premios } />
                </div>
            </div>
        </div>
        </section>
    </>
    )
}
export default Evento