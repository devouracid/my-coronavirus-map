import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Coronavirus Map</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2/">Coronavirus FAQ</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};


export default function Home() {
  return (
    <div>
      <a href="https://sivart-wright.github.io/covidAppFinal/" target="_blank" rel="noopener noreferrer">
       https://sivart-wright.github.io/covidAppFinal/

      </a>
    </div>
  )
}

export default Header;
