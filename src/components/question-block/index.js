import React from 'react';
import { Jumbotron, Image, ListGroup } from 'react-bootstrap';
import Player from '../player';
import img from './default.jpg';
import './question-block.scss';

const QuestionBlock = ({ correctAnswerId, groupData, correctAnswerAudio }) => {
  const data = groupData[correctAnswerId];
  const isCorrectAnswer = Number.isInteger(correctAnswerId);
  return (
    <Jumbotron className="random-ost">
      <Image src={isCorrectAnswer ? data.image : img} rounded />
      <ListGroup>
        <ListGroup.Item>
          <h3>{isCorrectAnswer ? `"${data.trackName}" из фильма ${data.filmName}` : "******"}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="audio-player">
            <Player src={correctAnswerAudio} />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Jumbotron>
  );
}
 
export default React.memo(QuestionBlock);
