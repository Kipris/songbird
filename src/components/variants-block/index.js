import React from 'react';
import './variants-block.scss';
import { ListGroup } from 'react-bootstrap';

const VariantsBlock = ({ birdData, correctAnswerId, indicatorClasses, click }) => {
  return (
    <ListGroup className="bird-variants">
      {birdData.map(({ name, id }) => (
        <ListGroup.Item
          key={id}
          onClick={() => click(id - 1)}>
          <span className={indicatorClasses[id - 1]}></span>
          {name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default VariantsBlock;
