import React, { useState } from 'react';
import { Card } from '../../types';
import { CardBody, CardInfoText, CardTitle, InfoRowWrapper } from './styles';

interface CardProps {
  card: Card;
  column: number;
  canCardMove: boolean;
  onDoubleClick: (e: React.MouseEvent) => void;
  row: number;
}

const CardComponent: React.FC<CardProps> = (props) => {
  const { card, canCardMove, column, onDoubleClick, row } = props;

  const [shaking, setShaking] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!canCardMove) {
      setShaking(true);
    }  else if (e.detail === 2) {
      onDoubleClick(e);
    }
  }

  return (
    <CardBody
      className={`${shaking ? "shake" : ""} p-1`}
      column={column}
      onAnimationEnd={() => setShaking(false)}
      onClick={e => handleClick(e)}
      row={row}
    >
      <InfoRowWrapper>
        <CardInfoText color={card.color}>{card.text}</CardInfoText>
        <CardInfoText color={card.color}>{card.suit}</CardInfoText>
      </InfoRowWrapper>
      <CardTitle color={card.color}>{card.text}</CardTitle>
      <InfoRowWrapper>
        <CardInfoText color={card.color}>{card.suit}</CardInfoText>
        <CardInfoText color={card.color}>{card.text}</CardInfoText>
      </InfoRowWrapper>
    </CardBody>
  );
}

export default CardComponent;