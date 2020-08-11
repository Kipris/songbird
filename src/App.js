import React, { PureComponent } from 'react';
import { Container } from 'react-bootstrap';
import { getCorrectAnswerId } from './utils';

import Header from './components/header';
import GameBlocks from './containers/game-blocks';
import FinishBlocks from './containers/finish-blocks';

import data from './assets/data/data.json';
import correctAudio from './assets/sounds/tada.mp3';
import incorrectAudio from './assets/sounds/no.mp3';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      maxRoundScore: 5,
      currentGroupId: 0,
      correctAnswerId: getCorrectAnswerId(),
      triesCount: 0,
      ostGroups: Object.keys(data),
      ostData: data,
      chosenAnswerId: null,
      indicatorClasses: new Array(6),
      isRoundGuessed: false,
      sound: '',
    }
  }

  handleChooseOst = (id, soundRef) => {
    const { correctAnswerId, maxRoundScore, indicatorClasses, isRoundGuessed } = this.state;
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
        { score: state.score + maxRoundScore - state.triesCount,
          isRoundGuessed: true,
          sound: correctAudio } : { };
      
      const incorrectAnswerState = !isAnswerCorrect && !isRoundGuessed ? { sound: incorrectAudio } : { };
      return {
        ...updatedState,
        ...correctAnswerState,
        ...incorrectAnswerState
      }
    }, () => {
      if (isRoundGuessed) return;
      soundRef.current.audio.current.play();
    })
  }

  handleGoNextLevel = () => {
    const { currentGroupId, ostGroups } = this.state;
    if (currentGroupId === ostGroups.length) {
      this.handleCongratulations();
      return;
    }
    const resetedSettings = this.getResetedSettings();
    this.setState((state) => ({
      ...state,
      currentGroupId: state.currentGroupId + 1,
      ...resetedSettings,
    }));
  }

  getResetedSettings = () => ({
    correctAnswerId: getCorrectAnswerId(),
    triesCount: 0,
    chosenAnswerId: null,
    indicatorClasses: new Array(6),
    isRoundGuessed: false,
    sound: '',
  });

  handleStartNewGame = () => {
    const resetedSettings = this.getResetedSettings();
    this.setState((state) => ({
      ...state,
      currentGroupId: 0,
      ...resetedSettings,
    }));
  }

  renderGameBlocks = () => {
    const { ostData, ostGroups, currentGroupId, correctAnswerId, chosenAnswerId, indicatorClasses, isRoundGuessed, sound } = this.state;
    return (
      <GameBlocks
        ostData={ostData}
        ostGroups={ostGroups}
        currentGroupId={currentGroupId}
        correctAnswerId={correctAnswerId}
        chosenAnswerId={chosenAnswerId}
        indicatorClasses={indicatorClasses}
        isRoundGuessed={isRoundGuessed}
        sound={sound}
        handleChooseOst={this.handleChooseOst}
        handleGoNextLevel={this.handleGoNextLevel}
      />
    )
  };

  renderFinishGameBlocks = () => {
    const { score, maxRoundScore, ostGroups } = this.state;
    return (
      <FinishBlocks
        score={score}
        maxRoundScore={maxRoundScore}
        ostGroups={ostGroups}
        handleStartNewGame={this.handleStartNewGame}
      />
    )
  }
  
  render() {
    const { score, currentGroupId, ostGroups } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Header
          score={score}
          currentGroupId={currentGroupId} />
        {currentGroupId === ostGroups.length ?
          this.renderFinishGameBlocks() :
          this.renderGameBlocks()}
      </Container>
    );
  }
}

export default App;
