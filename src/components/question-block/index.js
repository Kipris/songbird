import React from 'react';
import './question-block.scss';
import { Jumbotron, Image, ListGroup } from 'react-bootstrap';
import img from './bird.06a46938.jpg';

const QuestionBlock = ({ correctAnswerAudio }) => {
  return (
    <Jumbotron className="random-bird">
      <Image src={img} rounded />
      <div>
        <ListGroup>
          <ListGroup.Item>
            <h3>******</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="audio-player">
              <audio
                controls
                src={correctAnswerAudio}>
                  Your browser does not support the
                  <code>audio</code> element.
              </audio>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Jumbotron>
  );
}
 
export default QuestionBlock;