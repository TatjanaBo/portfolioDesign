import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import './Proyectos.scss';
import proyecto from '../../../../images/proyecto.png';
import Button from '../../../../components/button/Button';

const Proyectos = () => (
  <div className="proyecto_wrapper">
    <div className="proyecto_cards_wrapper">
      <h3 className="proyectos_heading">Proyectos</h3>
      <img className="proyecto_image" src={proyecto} alt="proyecto" />
      <img className="proyecto_image" src={proyecto} alt="proyecto" />
      <img className="proyecto_image" src={proyecto} alt="proyecto" />
      <img className="proyecto_image" src={proyecto} alt="proyecto" />
      <div className="proyecto_button_wraper">
        <Button>
          Ver más en Behance
          &nbsp;
          <BsArrowRight />
        </Button>
      </div>
    </div>
  </div>
);

export default Proyectos;
