import React from "react";
import "./footer.module.css";
/* Iconos MaterialUI */
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

function Footer({ RRSS }) {
  return (
    <footer>
      {RRSS.map((red, index) => {
        if (red.nombre === "Facebook") {
          return (
            <a key={index} href={red.url}>
              <FacebookIcon sx={{ fontSize: 40, color: "blue" }} /> {red.nombre}
            </a>
          );
        } else if (red.nombre === "Instagram") {
          return (
            <a key={index} href={red.url}>
              <InstagramIcon sx={{ fontSize: 40, color: "#8134AF" }} />
              {red.nombre}
            </a>
          );
        } else {
          return (
            <a key={index} href={red.url}>
              <LanguageIcon sx={{ fontSize: 40, color: "brown" }} />
              {red.nombre}
            </a>
          );
        }
      })}
      {/*Enlace del instituto */}
      <a href="https://iescuravalera.es">
        <img src="/logo.png" width="50" alt="logoIES" /> IES Cura Valera
      </a>
    </footer>
  );
}

export default Footer;


const RRSS = [
  { nombre: "Facebook", url: "https://facebook.com" },
  { nombre: "Instagram", url: "https://instagram.com" },
  { nombre: "LinkedIn", url: "https://linkedin.com" },
  { nombre: "Otro", url: "https://otro.com" } // Puede ser cualquier otra red social
];