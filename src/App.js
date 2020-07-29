import React from 'react';
import Header from './components/Header';
import QuestionBlock from './components/QuestionBlock';
import VariantsBlock from './components/VariantsBlock';
import BirdDetails from './components/BirdDetails';
import Button from './components/Button';

import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Header />
      <QuestionBlock />
      <Row>
        <Col>
          <VariantsBlock />
        </Col>
        <Col>
          <BirdDetails />
        </Col>
        <Button />
      </Row>
    </Container>
  );
}

export default App;
