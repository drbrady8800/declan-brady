import React from 'react';
import { GameWrapper } from './styles';
import { CardComponent } from '../../../components';
import { Card } from '../../../types';

// ♣️ ♦️ ♥️ ♠️

const AceSpades: Card = {
  number: 1,
  color: "#000000",
  suit: "♣",
  text: "A",
}
  
const AddictionSolitaire = () => {
  return (
    <GameWrapper className="p-35">
      <CardComponent card={AceSpades} width={"60px"}/>
    </GameWrapper>
  );
};
  
export default AddictionSolitaire;