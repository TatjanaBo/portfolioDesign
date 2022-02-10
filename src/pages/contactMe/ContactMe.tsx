import React, { useState } from 'react';
import './ContactMe.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';

const ContactMe = () => {
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  return (
    <div>
      <Header />
      <h1 className="contact_heading1">¡Hablemos!</h1>
      <h5 className="contact_heading2">Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en escribirme!</h5>
      <div className="form_wrapper">
        <form className="form">

          <h6 className="form_label">Tu nombre</h6>
          <input
            className="form_input"
            type="text"
            name="number"
            placeholder="Nombre"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <h6 className="form_label">Tu E-mail</h6>
          <input
            className="form_input"
            type="text"
            name="email"
            placeholder="Ejempolo@hotmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h6 className="form_label">Tu mesaje</h6>
          <textarea
            className="form_textarea"
            name="mensaje"
            placeholder="Hey..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            cols={30}
            rows={10}
          />
          <div className="form_button_wrapper">
            <Button>Enviar</Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
