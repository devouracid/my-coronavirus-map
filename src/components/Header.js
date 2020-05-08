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
           <li>
           <script type="text/javascript">
document.write('COVID-19 Local Information '.link('https://sivart-wright.github.io/covidAppFinal/
'));
</script>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
