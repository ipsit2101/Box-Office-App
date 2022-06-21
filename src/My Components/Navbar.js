import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled, NavList } from './HomePageStyling/NavbarStyle';

const LINKS = [
    {
        to: "/",
        text: 'Home',
    },
    {
        to: "/starred",
        text: 'Starred',
    }
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {
            LINKS.map(item => <li key = {item.to}><LinkStyled to = {item.to} className = {item.to === location.pathname ? 'active' : ''} >{item.text}</LinkStyled></li>)
        }
      </NavList>
    </div>
  );
}

export default memo(Navbar);
