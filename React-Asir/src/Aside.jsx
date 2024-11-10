import React from 'react';
import heroes from './heroes.json';
import Heroes from './SelectHeroes';

function Aside() {
  const marvelHeroes = heroes.filter(hero => hero.publisher === "Marvel Comics");

  return (
    <aside>
      <h3>Héroes de Marvel</h3>
      <Heroes />
      <h3>Videos de ASIR</h3>
      <iframe width="auto" height="auto" src="https://www.youtube.com/embed/z1IBlXIFp3Q?si=N_SrSV7Lpk-xIcJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
      <iframe width="auto" height="auto" src="https://www.youtube.com/embed/nfQW53TOZFc?si=pvo7a7lu1wYPzbBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </aside>
  );
}

export default Aside;