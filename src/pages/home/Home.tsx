import React from 'react';
import Header from '../../components/header/Header';
import Introduction from './components/introduction/Introduction';
import About from './components/about/About';
import Proyectos from './components/proyectos/Proyectos';
import Footer from '../../components/footer/Footer';

const Home = () => (
  <div>
    <Header />
    <Introduction />
    <About />
    <Proyectos />
    <Footer />
  </div>
);

export default Home;
