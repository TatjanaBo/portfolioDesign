import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link className="nav_link" to="/"><h5 className="header_logo_name">Miguel UI</h5></Link>
);

export default Logo;
