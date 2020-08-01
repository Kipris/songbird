import React from 'react';
import './bird-details.scss';
import { Card } from 'react-bootstrap';

const BirdDetails = ({ isAnswerChosen, birdData }) => {
  return (
    <Card className="bird-details">
      { Number.isInteger(isAnswerChosen) ?
        <div className="card-body">
          <img className="bird-image" src={birdData.image} alt={birdData.name} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{birdData.name}</h4>
            </li>
            <li className="list-group-item">
              <span>{birdData.species}</span>
            </li>
            <li className="list-group-item">
              <span className="audio-player">
                <audio
                  controls
                  src={birdData.audio}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
              </span>
            </li>
          </ul>
          <p>{birdData.description}</p>
        </div> :
        <p className="instruction">
          <span>Послушайте плеер. Выберите птицу из списка</span>
        </p>
      }
    </Card>
  );
}

export default BirdDetails;
