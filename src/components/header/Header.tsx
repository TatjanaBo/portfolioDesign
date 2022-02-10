import React from 'react';
import './Header.scss';
import Logo from '../logo/Logo';
import { headings } from '../../data/headerData';

const Header = () => {
  console.log(123);
  return (
    <div className="header_wrapper">
      <div>
        <Logo />
      </div>
      <div className="header_tags_wrapper">
        {
          headings.map((it) => (
            <a className="header_tags" href={it.link}>{it.title}</a>
          ))
        }
      </div>
    </div>
  );
};

export default Header;
