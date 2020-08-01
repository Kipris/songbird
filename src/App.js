import React, { Component } from 'react';
import Header from './components/header';
import QuestionBlock from './components/question-block';
import VariantsBlock from './components/variants-block';
import BirdDetails from './components/bird-details';
import Button from './components/button';

import { Container, Row, Col } from 'react-bootstrap';

// state:
// score
// current osts group
// correct answer id
// количество попыток (обнулять при переходе на другую ост группу)

class App extends Component {
  state = {
    
  }

  render() {
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
}

export default App;
