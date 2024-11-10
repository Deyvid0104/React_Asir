import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Tarjetas() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/assets/card1.jpg" />
        <Card.Body>
          <Card.Title>Instalación de Redes en ASIR</Card.Title>
          <Card.Text>
            Estudiantes de ASIR instalando y configurando una red de área local
            en el laboratorio.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/card2.jpg" />
        <Card.Body>
          <Card.Title>Monitoreo de Servidores</Card.Title>
          <Card.Text>
            Un estudiante de ASIR utilizando herramientas de monitoreo para
            asegurar el correcto funcionamiento de los servidores{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/card3.jpg" />
        <Card.Body>
          <Card.Title>Seguridad Informática</Card.Title>
          <Card.Text>
            Taller de seguridad informática donde los estudiantes de ASIR
            implementan medidas de protección contra amenazas cibernéticas.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Tarjetas;
