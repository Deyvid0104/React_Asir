import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import noticias from './noticias.json'; // Asegúrate de que la ruta sea correcta

function Defensa() {
  return (
    <div>
      <h2>Noticias</h2>
      <CardGroup>
        {noticias.map((noticia, index) => (
          <Card key={index}>
            <Card.Img variant="top" src={noticia.imagen} />
            <Card.Body>
              <Card.Title>{noticia.titulo}</Card.Title>
              <Card.Text>{noticia.texto}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default Defensa;