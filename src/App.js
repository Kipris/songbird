import React, { PureComponent } from 'react';
import Header from './components/header';
import QuestionBlock from './components/question-block';
import VariantsBlock from './components/variants-block';
import Details from './components/details';
import Button from './components/button';
import { Container, Row, Col } from 'react-bootstrap';
import data from './3.json';
import correctAudio from './sounds/tada.mp3';
import incorrectAudio from './sounds/no.mp3';

class App extends PureComponent {
  constructor(props) {
    super(props);
    // gameInfo
    // roundInfo
    // ostInfo
    this.state = {
      score: 0,
      currentGroupId: 0,
      correctAnswerId: this.getCorrectAnswerId(),
      triesCount: 0,
      ostGroups: Object.keys(data),
      ostData: data,
      chosenAnswerId: null,
      indicatorClasses: new Array(6),
      isRoundGuessed: false,
      sound: '',
    }
  }

  getCorrectAnswerId = (min = 0, max = 3) => (
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  handleChooseOst = (id, playerRef) => {
    const { correctAnswerId, indicatorClasses, isRoundGuessed } = this.state;
    const maxScore = 5;
    const isAnswerCorrect = correctAnswerId === id;
    const updatedClasses = [...indicatorClasses];
    if (!isRoundGuessed) {
      updatedClasses[id] = isAnswerCorrect ? 'correct' : 'incorrect';
    }
    this.setState((state) => {
      const updatedState = {
        ...state,
        chosenAnswerId: id,
        triesCount: state.triesCount + 1,
        indicatorClasses: updatedClasses,
      }
      const correctAnswerState = isAnswerCorrect && !isRoundGuessed ? 
        { score: state.score + maxScore - state.triesCount,
          isRoundGuessed: true,
          sound: correctAudio } : { };
      
      const incorrectAnswerState = !isAnswerCorrect && !isRoundGuessed ? { sound: incorrectAudio } : {};
      return {
        ...updatedState,
        ...correctAnswerState,
        ...incorrectAnswerState
      }
    }, () => {
      if (isRoundGuessed) return;
      playerRef.current.audio.current.play();
    })
  }

  handleGoNextLevel = () => {
    this.setState((state) => ({
      ...state,
      currentGroupId: state.currentGroupId + 1,
      correctAnswerId: this.getCorrectAnswerId(),
      triesCount: 0,
      chosenAnswerId: null,
      indicatorClasses: new Array(6),
      isRoundGuessed: false,
      sound: ''
    }))
  }
  
  render() {
    const { score, ostData, ostGroups, currentGroupId, correctAnswerId, chosenAnswerId, indicatorClasses, isRoundGuessed, sound } = this.state;
    const groupName = ostGroups[currentGroupId];
    const groupData = ostData[groupName];
    console.log(this.state);
    return (
      <Container>
        <Header
          score={score}
          currentGroupId={currentGroupId} />
        { ostData ?
          <>
            <QuestionBlock 
              correctAnswerId={isRoundGuessed ? correctAnswerId : null}
              groupData={groupData}
              correctAnswerAudio={groupData[correctAnswerId].audio} />
            <Row>
              <Col>
                <VariantsBlock
                  src={sound}
                  ostData={groupData}
                  correctAnswerId={correctAnswerId}
                  indicatorClasses={indicatorClasses}
                  click={this.handleChooseOst} />
              </Col>
              <Col>
                <Details
                  isAnswerChosen={chosenAnswerId}
                  ostData={groupData[chosenAnswerId]} />
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
