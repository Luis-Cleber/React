import React from "react";

import "./styles/App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import article1Img from "./assets/images/article1.jpg"
import article2Img from "./assets/images/article2.jpg"
import article3Img from "./assets/images/article3.jpg"
import article4Img from "./assets/images/article4.jpg"
import { Couter } from "./components/Couter/Couter";

// Componente em classe é uma classe que herda a classe component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {
  //Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />

        <Couter />

        {/*

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam
            iure expedita id velit maxime minus, sapiente ratione molestias
            pariatur mollitia."
            thumbnail={article1Img}
          />

          <Article 
          title="Vibrant portraits of 2020"
          provider="SpaceNews"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam
          iure expedita id velit maxime minus, sapiente ratione molestias
          pariatur mollitia."
          thumbnail={article2Img}
          />

          <Article 
          title="36 Days of Malayalam type"
          provider="Spaceflight Now"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam
          iure expedita id velit maxime minus, sapiente ratione molestias
          pariatur mollitia."
          thumbnail={article3Img}
          />

          <Article 
          title="Designing Dashboards"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nam
          iure expedita id velit maxime minus, sapiente ratione molestias
          pariatur mollitia."
          thumbnail={article4Img}
          />
        </section>*/}
      </>
    );
  }
}

export default App;
