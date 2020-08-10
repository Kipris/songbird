import React, { PureComponent } from 'react';
import { Jumbotron, Image, ListGroup } from 'react-bootstrap';
import Player from '../player';
import img from '../../assets/images/default.jpg';
import './question-block.scss';

class QuestionBlock extends PureComponent {
  constructor(props) {
    super(props);
    this.playerRef = React.createRef();
  }

  componentDidUpdate() {
    this.handleStopPlayer();
  }

  handleStopPlayer = () => {
    const { isRoundGuessed } = this.props;
    if (!isRoundGuessed) return;
    this.playerRef.current.audio.current.pause();
  }

  render() {
    const { correctAnswerId, groupData, correctAnswerAudio } = this.props;
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
              <Player
                ref={this.playerRef}
                src={correctAnswerAudio} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Jumbotron>
    );
  }
}
 
export default QuestionBlock;
