import React from 'react';
import { Card } from 'react-bootstrap';
import Player from '../player';
import './bird-details.scss';

const BirdDetails = ({ isAnswerChosen, birdData }) => {
  return (
    <Card className="bird-details">
      { Number.isInteger(isAnswerChosen) ?
        <>
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
                <div className="audio-player">
                  <Player src={birdData.audio} />
                </div>
              </li>
            </ul>
          </div>
          <p>{birdData.description}</p>
        </> :
        <p className="instruction">
          <span>Послушайте плеер. Выберите птицу из списка</span>
        </p>
      }
    </Card>
  );
}

export default React.memo(BirdDetails);
