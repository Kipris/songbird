import React from 'react';
import './question-block.scss';
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
              src="https://www.mboxdrive.com/Doja%20Cat%20-%20Boss%20B_tch(from%20Birds%20of%20Prey_%20The%20Album).mp3">
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