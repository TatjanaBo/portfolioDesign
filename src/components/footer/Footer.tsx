import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Footer.scss';
import { FaFigma } from 'react-icons/fa';
import { AiOutlineLinkedin, AiFillBehanceSquare } from 'react-icons/ai';
import Logo from '../logo/Logo';

const Footer = () => (
  <div className="footer_wrapper">
    <div className="footer_position">
      <div className="footer_content_wrapper">

        <Logo />

        <div className="part_wrapper">
          <h6 className="footer_heading">Inicio</h6>
          <a className="footer_link" href="#a">Acera de mi</a>
          <a className="footer_link" href="#a">Proyectos</a>
        </div>

        <div className="part_wrapper">
          <h6 className="footer_heading">Contáctme</h6>
          <Link to="/contact">
            {' '}
            <a className="footer_link" href="#a">Correo</a>
          </Link>
          <a className="footer_link" href="#a">LinkedIn</a>
        </div>

        <div className="part_wrapper">
          <h6 className="footer_heading">Social</h6>
          <div className="footer_icon_wrapper">
            <span className="footer_icon"><AiFillBehanceSquare /></span>
            <span className="footer_icon"><AiOutlineLinkedin /></span>
            <span className="footer_icon"><FaFigma /></span>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Footer;
