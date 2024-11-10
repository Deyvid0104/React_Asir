import React from 'react'
import style from './header.module.css'
// import imagen from './assets/SEGURIDAD-Y-MEDIO-AMBIENTE.jpg'; // Importa la imagen


function Header() {
  return (
    <header className={style.cabecera}>
        {/* <img src={imagen} alt="asir" /> */}
        <h1>MI PRIMERA PÁGINA EN IAW</h1>
    </header>
  )
}

export default Header