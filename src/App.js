import React, { PureComponent } from 'react';
import Header from './components/header';
import QuestionBlock from './components/question-block';
import VariantsBlock from './components/variants-block';
import BirdDetails from './components/bird-details';
import Button from './components/button';
import BirdAPIService from './services/bird-api-service';
import { Container, Row, Col } from 'react-bootstrap';

class App extends PureComponent {
  constructor() {
    super();
    // gameInfo
    // roundInfo
    // birdInfo
    this.state = {
      score: 0,
      currentGroupId: 0,
      correctAnswerId: this.getCorrectAnswerId(),
      triesCount: 0,
      birdGroups: ['warmup', 'passerines', 'forest', 'songbirds', 'predators', 'sea'],
      birdData: null,
      chosenAnswerId: null,
      indicatorClasses: new Array(6),
      isRoundGuessed: false,
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
    const maxScore = 5;
    const { correctAnswerId, indicatorClasses, isRoundGuessed } = this.state;
    const updatedClasses = [...indicatorClasses];
    if (correctAnswerId !== id) {
      updatedClasses[id] = 'incorrect';
      this.setState((state) => ({
        ...state,
        chosenAnswerId: id,
        triesCount: isRoundGuessed || state.triesCount + 1,
        indicatorClasses: updatedClasses
      }))
      return;
    } 
    updatedClasses[id] = 'correct';
    this.setState((state) => ({
      ...state,
      score: state.score + maxScore - state.triesCount,
      chosenAnswerId: id,
      triesCount: isRoundGuessed || state.triesCount + 1,
      indicatorClasses: updatedClasses,
      isRoundGuessed: true
    }))
  }

  handleGoNextLevel = () => {
    this.setState((state) => ({
      ...state,
      currentGroupId: state.currentGroupId + 1,
      correctAnswerId: this.getCorrectAnswerId(),
      triesCount: 0,
      chosenAnswerId: null,
      indicatorClasses: new Array(6),
    }), () => {
      this.fetchBirdData();
    })
  }
  
  render() {
    const { score, birdData, currentGroupId, correctAnswerId, chosenAnswerId, indicatorClasses, isRoundGuessed } = this.state;
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
                  indicatorClasses={indicatorClasses}
                  click={this.handleChooseBird} />
              </Col>
              <Col>
                <BirdDetails
                  isAnswerChosen={chosenAnswerId}
                  birdData={birdData[chosenAnswerId]} />
              </Col>
              <Button
                click={this.handleGoNextLevel}
                disabled={!isRoundGuessed} />
            </Row>
          </> :
        null }
      </Container>
    );
  }
}

export default App;
