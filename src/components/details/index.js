import React from 'react';
import { Card } from 'react-bootstrap';
import Player from '../player';
import './details.scss';

const Details = ({ isAnswerChosen, ostData }) => {
  return (
    <Card className="details">
      { Number.isInteger(isAnswerChosen) ?
        <>
          <div className="card-body">
            <img src={ostData.image} alt={ostData.filmName} />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>{ostData.filmName}</h4>
              </li>
              <li className="list-group-item">
                <span>{ostData.trackName}</span>
              </li>
              <li className="list-group-item">
                <div className="audio-player">
                  <Player src={ostData.audio} />
                </div>
              </li>
            </ul>
          </div>
          <p>{ostData.description}</p>
        </> :
        <p className="instruction">
          <span>Послушайте плеер. Выберите фильм, сериал или игру, соответствующую саундтреку.</span>
        </p>
      }
    </Card>
  );
}

export default React.memo(Details);
