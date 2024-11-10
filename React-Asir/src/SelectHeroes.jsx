import React from 'react';
import Form from 'react-bootstrap/Form';
import heroes from './heroes.json'; // Asegúrate de que la ruta sea correcta

function Heroes() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Selecciona un héroe</option>
      {heroes
        .filter(hero => hero.publisher === "Marvel Comics") // Filtrar solo héroes de Marvel
        .map((hero, index) => (
          <option key={index} value={hero.superhero}>
            {hero.superhero}
          </option>
        ))}
    </Form.Select>
  );
}

export default Heroes;