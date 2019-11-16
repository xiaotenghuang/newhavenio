import Nav from 'components/header/nav';
import Logo from 'components/shared/logo';
import { theme } from 'constants/theme';
import { Link } from 'gatsby';
import React from 'react';
import * as Styled from './header.css';

const Header = () => (
  <Styled.Headroom>
    <div className="headroom--inner">
      <Link to="/">
        <Logo
          squareColor={theme.colors.Whites[100]}
          letterColor="transparent"
        />
      </Link>
      <Nav />
    </div>
  </Styled.Headroom>
);

export default Header;
