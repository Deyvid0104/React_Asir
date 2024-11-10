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
            <a key={index} href={red.url} target="_blank" rel="noopener noreferrer">
              <FacebookIcon sx={{ fontSize: 40, color: "blue" }} />
            </a>
          );
        } else if (red.nombre === "Instagram") {
          return (
            <a key={index} href={red.url} target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ fontSize: 40, color: "green" }} />
            </a>
          );
        } else {
          return (
            <a key={index} href={red.url} target="_blank" rel="noopener noreferrer">
              <LanguageIcon sx={{ fontSize: 40, color: "brown" }} />
            </a>
          );
        }
      })}
    </footer>
  );
}

export default Footer;