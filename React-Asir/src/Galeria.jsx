import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Galeria() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/almeria.jpg"
          alt="Almeria"
        />
        <Carousel.Caption>
          <h3>Ameria</h3>
          <p>
            Conocida por sus paisajes desérticos y playas vírgenes, Almería es
            un destino popular para los amantes del sol y la naturaleza. El
            Parque Natural de Cabo de Gata-Níjar es uno de sus principales
            atractivos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/sevilla.jpg"
          alt="Sevilla"
        />
        <Carousel.Caption>
          <h3>Sevilla</h3>
          <p>
            La capital de Andalucía, Sevilla, es famosa por su catedral, la
            Giralda y el Real Alcázar. La ciudad es un importante centro
            cultural y económico, y es conocida por su feria de abril y su
            Semana Santa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/assets/jaen.jpg" alt="Jaen" />
        <Carousel.Caption>
          <h3>Jaen</h3>
          <p>
            Famosa por sus olivares y su aceite de oliva, Jaén es una provincia
            con un paisaje dominado por colinas y castillos. La ciudad de Úbeda,
            con su arquitectura renacentista, es Patrimonio de la Humanidad.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/assets/cadiz.jpg" alt="Cadiz" />
        <Carousel.Caption>
          <h3>Cadiz</h3>
          <p>
            Famosa por su carnaval y sus playas, Cádiz es una ciudad con una
            rica historia marítima. La provincia también alberga la ciudad de
            Jerez, conocida por su vino de jerez y sus caballos andaluces.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/cordoba.jpg"
          alt="Cordoba"
        />
        <Carousel.Caption>
          <h3>Cordoba</h3>
          <p>
            Con su impresionante Mezquita-Catedral, Córdoba es una ciudad que
            refleja la rica herencia cultural de Andalucía. La provincia es
            conocida por sus patios floridos y su casco histórico, declarado
            Patrimonio de la Humanidad.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/assets/malaga.jpg" alt="Malaga" />
        <Carousel.Caption>
          <h3>Malaga</h3>
          <p>
            Conocida por su clima cálido y sus playas, Málaga es un destino
            turístico muy popular. La ciudad de Málaga, con su puerto y su
            centro histórico, es un importante centro cultural y económico.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/assets/huelva.jpg" alt="Huelva" />
        <Carousel.Caption>
          <h3>Huelva</h3>
          <p>
            Conocida por sus playas y su gastronomía, especialmente el jamón
            ibérico de Jabugo, Huelva es una provincia con una rica tradición
            minera y agrícola. El Parque Nacional de Doñana es uno de sus
            principales atractivos naturales.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/granada2.jpg"
          alt="Granada"
        />
        <Carousel.Caption>
          <h3>Granada</h3>
          <p>
            Hogar de la Alhambra, uno de los monumentos más visitados de España,
            Granada combina historia, cultura y naturaleza. La ciudad también es
            famosa por su ambiente universitario y su proximidad a la Sierra
            Nevada.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Galeria;
