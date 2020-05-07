import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="Coronavirus FAQ">
      <Helmet>
        <title>COVID-19 Information</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>COVID-19 FAQ</h1>
        <p>What is the Novel Coronavirus? </p>
      <h2>Coronavirus</h2>
      <p>Cornavirus disease (COVID-19) is a respiratory illness which spreads from person to person by droplets from sneezes and coughs
        Symptoms can range in severity and often include coughing, fever, and/or shortness of breath. COVID-19 is caused by a new type of coronavirus that was first identified in 2019 in Wuhan, China. </p>

      </Container>
    </Layout>
  );
};

export default SecondPage;
