import { AiOutlineMobile } from 'react-icons/ai';
import { ReactComponent as Htmlimage } from '../images/html.svg';
import { ReactComponent as Coworking } from '../images/coworking.svg';
import { ReactComponent as Comunication } from '../images/comunication.svg';
import { ReactComponent as Sistema } from '../images/sistema.svg';
import { ReactComponent as Iteracion } from '../images/iteraction.svg';

// eslint-disable-next-line import/prefer-default-export
export const aboutInfo = [{
  icon: <AiOutlineMobile />,
  title: 'Responsive design',
  text: 'Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto',
},
{
  icon: <Htmlimage style={{ fill: 'white' }} />,
  title: 'HTML y CSS',
  text: 'Tengo conocimientos basicos y bien fundamentados de html y css, lo que me permite tener un panorama mas claro a la hora de tomar mis decisiones de diseño',
},
{
  icon: <Coworking style={{ fill: 'white' }} />,
  title: 'Cooworking',
  text: 'Trato de ser un activo valioso en el equipo que esté trabajando, aportando mis conocimientos y material que optimice el flujo de trabajo en el desarrollo del proyecto ',
},
{
  icon: <Comunication />,
  title: 'Comunication',
  text: 'Puedo mantener comunicación  con el equipo de desarrollo, atento a cualquier inquietud que se presente con el fin de llevar el proyecto de manera correcta ',
},
{
  icon: <Sistema />,

  title: 'Sistema de diseño',
  text: 'Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto',
},
{
  icon: <Iteracion />,
  title: 'Iteración',
  text: 'Soy capaz de iterar recibiendo e interpretando el feedback que me sea proporcionado con el fin de mejorar la calidad del producto que esté diseñando',
}];
