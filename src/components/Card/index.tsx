import React from 'react';
import { Card } from '../../types';
import { CardBody } from './styles';

interface CardProps {
  card: Card;
  width: string;
}

const CardComponent: React.FC<CardProps> = (props) => {
  const { card, width } = props;
  return (
    <CardBody width={width}>
      <h1>{card.text}</h1>
    </CardBody>
  );
}

export default CardComponent;