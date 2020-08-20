import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import Button from '../../components/button';
import Confetti from '../../components/confetti';

import './finish-blocks.scss';

const FinishBlocks = ({
  score,
  maxRoundScore,
  ostGroups,
  handleStartNewGame,
}) => {
  const roundsCount = ostGroups.length;
  const maxScore = maxRoundScore * roundsCount;
  if (score === maxScore) {
    return (
      <Jumbotron className="finish-blocks">
        <h1 className="display-3 text-center">
          Поздравлем!
          <span role="img" aria-label="">🎉</span>
        </h1>
        <p className="lead text-center">Вы настоящий знаток фильмов!</p>
        <hr className="my-4" /> 
        <img className="img-win" src="https://img1.goodfon.ru/wallpaper/nbig/7/76/game-of-thrones-daenerys-7743.jpg" alt="win"></img>
        <Confetti />
      </Jumbotron>
    );
  }

  return (
    <Jumbotron className="finish-blocks">
      <h1 className="display-3 text-center">Поздравляем!</h1>
      <p className="lead text-center">
        Вы прошли викторину и набрали {score} из {maxScore} возможных баллов
      </p>
      <hr className="my-4" /> 
      <Button
        click={handleStartNewGame}>
        Попробовать еще раз!
      </Button> 
    </Jumbotron>
  );
}

export default React.memo(FinishBlocks);
