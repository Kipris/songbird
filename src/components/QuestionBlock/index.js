import React, { useEffect } from 'react';
import './QuestionBlock.scss';
import { Jumbotron, Image, ListGroup } from 'react-bootstrap';
import img from './bird.06a46938.jpg';

const QuestionBlock = () => {
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
              src="https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3">
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