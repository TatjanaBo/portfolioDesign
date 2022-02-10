import React from 'react';
import './proyectosPage.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import proyecto from '../../images/proyecto.png';
import tipografia from '../../images/tipografia.png';
import colors from '../../images/colors.png';
import colors2 from '../../images/colors2.png';
import botones from '../../images/botones.png';

const ProyectosPage = () => (
  <div className="proyecto_page_wrapper">
    <Header />
    <div className="proyecto_page_content_wrapper">

      <h5 className="proyecto_page_heading1">Web - Iglesia fuente de poder</h5>
      <h1 className="proyecto_page_heading2">Guía de estilos</h1>
      <img className="proyecto_page_image" src={proyecto} alt="proyecto" />

      <h3 className="proyecto_page_heading3">Acerca del proyecto</h3>
      <p className="proyecto_text">
        La iglesia “Funte de poder” desarrollaba sus actividades de manera presencial en su lugar de reunión habitual, pero con la situación actual que se vive en el mundo, todo se comenzó a virtualizar y con ello los servicios de la iglesia. Esta será una web que permita conocer los medios por los cuales se pueden hacer donaciones a la iglesia para su proyecto de reconstrucción y conocer los detalles del mismo.
        Mi rol consistió en crear una guía de estilos y aplicarla en la creacion de los Mockups de alta fidelidad.
      </p>

      <h4 className="proyecto_page_heading4">Tipografía</h4>
      <p className="proyecto_text">
        Se difinió que la web será para un publico variado, con distintos gustos y diferentes edades, por lo que se escogió una tipografia san serif, elegante y simple, con el fin de que sea legible por todos los usuarios en sus distintas escalas.
        Esta tipografía está disponible de forma gratuita en Google fonts.
      </p>
      <img className="proyecto_page_image" src={tipografia} alt="" />

      <h4 className="proyecto_page_heading5">Paleta de colores</h4>
      <p className="proyecto_text">La elección de los colores se hizo en base al isologotipo de la iglesia, tomando sus colores principales y sus distintas intensidades. Eso con el fin de seguir una misma linea entre su identidad grafica y lo que será la web.</p>
      <div className="color_wrapper">
        <img className="proyecto_page_image" src={colors} alt="colors" />
        <img className="proyecto_page_image" src={colors2} alt="colors2" />
      </div>
      <h4 className="proyecto_page_heading5">Botones</h4>
      <p className="proyecto_text">Los botones en sus diferentes escalas, tanto para movil como para escritorio.</p>
      <img className="proyecto_page_image" src={botones} alt="buttons" />
    </div>
    <Footer />
  </div>
);

export default ProyectosPage;
