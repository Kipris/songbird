import React, { Component } from 'react';
import Header from './components/header';
import QuestionBlock from './components/question-block';
import VariantsBlock from './components/variants-block';
import BirdDetails from './components/bird-details';
import Button from './components/button';
import BirdAPIService from './services/bird-api-service';
import { Container, Row, Col } from 'react-bootstrap';

// state:
// score
// current osts group
// correct answer id
// количество попыток (обнулять при переходе на другую ост группу)

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      currentGroupId: 0,
      correctAnswerId: null,
      triesQuantity: 0,
      birdGroups: ['warmup', 'passerines', 'forest', 'songbirds', 'predators', 'sea'],
      birdData: null
    }
  }

  componentDidMount() {
    const birdService = new BirdAPIService();
    const baseUrl = 'https://songbird-5d0ab.firebaseio.com/';
    const warmupData = birdService.getBirdGroup(`${baseUrl}${this.state.birdGroups[0]}.json`)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Could not fetch', error);
      });
    this.setState({ birdData: warmupData });
  }
  
  render() {
    const { score, birdData, currentGroupId } = this.state;
    console.log(birdData);
    return (
      <Container>
        <Header
          score={score}
          currentGroupId={currentGroupId} />
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
