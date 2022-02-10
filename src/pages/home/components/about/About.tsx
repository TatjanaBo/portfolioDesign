import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import hero from './hero.png';
import Button from '../../../../components/button/Button';
import './About.scss';
import { ReactComponent as Arrow } from '../../../../images/arrowRight.svg';

const About = () => (
  <div className="about_wrapper">
    <div className="about_card_wrapper">
      <div>
        <img className="about_image" src={hero} alt="hero" />
      </div>
      <div className="text_wrapper">
        <h2 className="about_heading">Acera de mi</h2>
        <p className="about_text">
          Hola! mi nombre es Miguel y tengo gran afinidad hacía el trabajo colaborativo, me gusta crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que un buen producto no solo brinda una solución sino que permite crear una experiencia emocional en las personas que lo usan.
        </p>
        <p className="about_text">En mi proceso creativo utilizo herramientas como Figma, Adobe XD, Photoshop e Illustrator que me ayudan en el flujo de trabajo para la producción de interfaces de usuario.</p>
        <Button>
          {' '}
          Mas acerca de mi
          &nbsp;
          <BsArrowRight />
        </Button>
      </div>
    </div>
  </div>
);

export default About;
