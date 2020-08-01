import React, { Component } from 'react';
import Header from './components/header';
import QuestionBlock from './components/question-block';
import VariantsBlock from './components/variants-block';
import BirdDetails from './components/bird-details';
import Button from './components/button';
import BirdAPIService from './services/bird-api-service';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      currentGroupId: 0,
      correctAnswerId: this.getCorrectAnswerId(),
      triesCount: 0,
      birdGroups: ['warmup', 'passerines', 'forest', 'songbirds', 'predators', 'sea'],
      birdData: null,
      chosenAnswerId: null
    }
  }

  componentDidMount() {
    this.fetchBirdData();
  }

  fetchBirdData = () => {
    const { currentGroupId } = this.state;
    const birdService = new BirdAPIService();
    const baseUrl = 'https://songbird-5d0ab.firebaseio.com/';
    birdService.getBirdGroup(`${baseUrl}${this.state.birdGroups[currentGroupId]}.json`)
      .then((data) => {
        this.setState({ 
          birdData: data,
        });
      })
      .catch((error) => {
        console.error('Could not fetch', error);
      });
  }

  getCorrectAnswerId = (min = 0, max = 5) => (
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  handleChooseBird = (id) => {
    this.setState((state) => ({ chosenAnswerId: id, triesCount: state.triesCount + 1}), () => {
      const { triesCount } = this.state;
      if (triesCount === 1) {
        this.setState((state) => ({ ...state, score: state.score + 5}))
      } else if (triesCount === 2) {
        this.setState((state) => ({ ...state, score: state.score + 4}))
      } else if (triesCount === 3) {
        this.setState((state) => ({ ...state, score: state.score + 3}))
      } else if (triesCount === 4) {
        this.setState((state) => ({ ...state, score: state.score + 2}))
      } else if (triesCount === 5) {
        this.setState((state) => ({ ...state, score: state.score + 1}))
      } else {
        return;
      }
    })
  }

  handleGoNextLevel = () => {
    this.setState((state) => ({
      ...state,
      currentGroupId: state.currentGroupId + 1,
      correctAnswerId: this.getCorrectAnswerId(),
      triesCount: 0,
      chosenAnswerId: null
    }), () => {
      this.fetchBirdData();
    })
  }
  
  render() {
    const { score, birdData, currentGroupId, correctAnswerId, chosenAnswerId } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Header
          score={score}
          currentGroupId={currentGroupId} />
        { birdData ?
          <>
            <QuestionBlock 
              correctAnswerAudio={birdData[correctAnswerId].audio} />
            <Row>
              <Col>
                <VariantsBlock
                  birdData={birdData}
                  correctAnswerId={correctAnswerId}
                  click={this.handleChooseBird} />
              </Col>
              <Col>
                <BirdDetails
                  isAnswerChosen={chosenAnswerId}
                  birdData={birdData[chosenAnswerId]} />
              </Col>
              <Button
                click={this.handleGoNextLevel}
                disabled={correctAnswerId !== chosenAnswerId} />
            </Row>
          </> :
        null }
      </Container>
    );
  }
}

export default App;
