import React from 'react';
import { Jumbotron, Image, ListGroup } from 'react-bootstrap';
import Player from '../player';
import img from './default.jpg';
import './question-block.scss';

const QuestionBlock = ({ correctAnswerAudio }) => {
  return (
    <Jumbotron className="random-ost">
      <Image src={img} rounded />
      <ListGroup>
        <ListGroup.Item>
          <h3>******</h3>
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
