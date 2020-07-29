import React from 'react';
import './VariantsBlock.scss';
import { ListGroup } from 'react-bootstrap';

const VariantsBlock = () => {
  return (
    <ListGroup className="bird-variants">
      <ListGroup.Item><span></span>Зяблик</ListGroup.Item>
      <ListGroup.Item><span></span>Клёст</ListGroup.Item>
      <ListGroup.Item><span></span>Горлица</ListGroup.Item>
      <ListGroup.Item><span></span>Дятел</ListGroup.Item>
      <ListGroup.Item><span></span>Удод</ListGroup.Item>
      <ListGroup.Item><span></span>Стриж</ListGroup.Item>
    </ListGroup>
  );
}

export default VariantsBlock;
