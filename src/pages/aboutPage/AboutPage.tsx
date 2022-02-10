import React from 'react';
import './AboutPage.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import hero from '../home/components/about/hero.png';
import { aboutInfo } from '../../data/aboutInfo';

const AboutPage = () => (
  <div>
    <Header />
    <div className="about_page_card_wrapper">
      <div className="about_page_card_content">
        <div>
          <img className="about_page_card_image" src={hero} alt="" />
        </div>
        <div>
          <h1 className="about_page_heading_main">Miguel Ruz</h1>
          <p className="about_page_card_text">
            Soy Diseñador UI, actualmente vivo en Turbaco-Bolivar, un pueblo a las afueras de Cartagena (Colombia).
            Me agrada la idea de trabajar en equipo, pienso que es una manera de conectar con nuevas habilidades y de brindar mi conocimiento al equipo con el fin de mejorar la productividad en el desarrollo de algun producto digital. Me gusta descubrir cosas nuevas a diario y ser un activo valioso en cualquier equipo en el que me desarrolle, por lo que estoy aprendiendo constantemente e investigando acerca de las nuevas tendencias.
            Trato de buscar todo el Feedback posible en los proyectos, con el fin de mejorar y poder hacer diseños que no solo sean atractivos esteticamente sino que sean accesibles y funcionales por lo que me gusta trabajar muy de la mano con los stakeholders.
            Hablemos!
          </p>
          <h6 className="about_page_card_email">miguelruz1126@gmail.com</h6>
        </div>
      </div>
      <div className="habilidades">
        {
          aboutInfo.map((it) => (
            <div key={it.title} className="card_container">
              <span>{it.icon}</span>
              <h3 className="card_title">{it.title}</h3>
              <p className="card_text">{it.text}</p>
            </div>
          ))
        }
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
