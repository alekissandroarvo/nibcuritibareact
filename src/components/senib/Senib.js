import Menu from "../menu/Menu";
import NavBar from "../navbar/NavBar";
import React from "react";
import { Player } from "video-react";
//import "node_modules/video-react/dist/video-react.css";
<link rel="stylesheet" href="/css/video-react.css" />;

export default function Senib() {
  return (
    <div>
      <NavBar />
      <Menu />
      <center>
        <h2>Matéria atual</h2>
        <li>Princípios de Vida 1</li>
        <p>Vídeo da aula 3</p>
        <a href="https://1drv.ms/u/s!Ajc7AQx4mfMnr1Q_LEF19GwcRYNq?e=u6ndEK">
          Aula 3
        </a>
      </center>
      <center>
        <h2>Matérias Anteriores</h2>
        <li>Escatologia</li>
        <li>Coração de Discípulo</li>
      </center>
    </div>
  );
}
