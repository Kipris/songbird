import React from 'react';
import './bird-details.scss';
import { Card } from 'react-bootstrap';

const BirdDetails = () => {
  return (
    <Card className="bird-details">
      <p className="instruction">
        <span>Послушайте плеер. Выберите птицу из списка</span>
      </p>
    </Card>
  );
}

export default BirdDetails;
