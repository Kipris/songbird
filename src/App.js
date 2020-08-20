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
      correctAnswers: [],
      chosenVariants: [],
    }
  }

  handleChooseOst = (id, soundRef) => {
    const { correctAnswerId, indicatorClasses, isRoundGuessed, chosenVariants } = this.state;
    const isAnswerCorrect = correctAnswerId === id;
    const updatedClasses = [...indicatorClasses];
    if (!isRoundGuessed) {
      updatedClasses[id] = isAnswerCorrect ? 'correct' : 'incorrect';
    }
    this.setState((state) => {
      const updatedState = {
        ...state,
        chosenAnswerId: id,
        indicatorClasses: updatedClasses,
        chosenVariants: state.chosenVariants.concat(id)
      }
      if (chosenVariants.indexOf(id) !== -1 || isRoundGuessed) {
        return updatedState;
      }

      const stateDependOnAnswer = isAnswerCorrect ? this.getCorrectAnswerState(state) : this.getIncorrectAnswerState(state);
      return {
        ...updatedState,
        ...stateDependOnAnswer
      }
    }, () => {
      if (!isRoundGuessed) {
        soundRef.current.audio.current.play();
      }
    })
  }

  getCorrectAnswerState = (state) => {
    const { maxRoundScore } = this.state;
    const groupName = state.ostGroups[state.currentGroupId];
    const groupData = state.ostData[groupName];
    const { filmName } = groupData[state.correctAnswerId];
    return {
      score: state.score + maxRoundScore - state.triesCount,
      isRoundGuessed: true,
      triesCount: state.triesCount + 1,
      sound: correctAudio,
      correctAnswers: state.correctAnswers.concat(filmName),
    };
  }

  getIncorrectAnswerState = (state) => {
    return {
      triesCount: state.triesCount + 1,
      sound: incorrectAudio
    };
  }

  handleGoNextLevel = () => {
    const { currentGroupId, ostGroups } = this.state;
    if (currentGroupId === ostGroups.length) {
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
    chosenVariants: [],
  });

  handleStartNewGame = () => {
    const resetedSettings = this.getResetedSettings();
    this.setState((state) => ({
      ...state,
      score: 0,
      currentGroupId: 0,
      correctAnswers: [],
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
    const { score, maxRoundScore, ostGroups, correctAnswers } = this.state;
    console.log(`Правильные ответы: ${correctAnswers.split(', ')}`);
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
