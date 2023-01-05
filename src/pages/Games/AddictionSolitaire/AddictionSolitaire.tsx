import React, { useState, useEffect } from 'react';
import { BlankSpace, GameWrapper } from './styles';
import { CardComponent } from '../../../components';
import { Card, Deck } from '../../../types';
import { cardCanMove, checkWin, moveCard, shuffle } from '../../../utils/AddictionSolitaire';
  
const AddictionSolitaire: React.FC = () => {
  const [cards, setCards] = useState<Array<Card>>(shuffle(Deck));
  const [won, setWon] = useState<boolean>(false);
  const [blankHighlighted, setBlankHighlighted] = useState<boolean>(false);
  const [numShuffles, setNumShuffles] = useState<number>(0);
  const [history, setHistory] = useState<Array<Array<Card>>>([cards]);

  const onMoveCard = (card: Card, index: number) => {
    const newOrder = moveCard(card, index, cards);
    if (newOrder !== undefined) {
      setCards([...newOrder]);
      setHistory([...history, newOrder]);
      const won = checkWin(newOrder);
      if (won) {
        setWon(true);
      }
    }
  }
  return (
    <>
      <GameWrapper className="p-35">
        {cards.map((card, index) => {
          if (card.number === 1) {
            return (
              <BlankSpace
                className={""}
                column={index % 13}
                key={index}
                row={Math.floor(index / 13)}
              />
            );
          } else {
            return <CardComponent
              canCardMove={cardCanMove(card, cards) !== -1}
              card={card}
              column={index % 13}
              key={index}
              onDoubleClick={() => onMoveCard(card, index)}
              row={Math.floor(index / 13)}
            />
          }
        })}
      </GameWrapper>
      <button onClick={() => {
        if (history.length > 1) {
          const oldState = history[history.length - 2];
          setCards([...oldState]);
          setHistory([...history.slice(0, history.length - 1)]);
        }
      }}>
        Undo
      </button>
      <button onClick={() => {
        if (numShuffles < 3) {
          const newOrder = shuffle(cards);
          setCards([...newOrder]);
          setHistory([...history, newOrder]);
          setNumShuffles(numShuffles + 1);
        } else {
          const newOrder = shuffle(Deck);
          setCards([...newOrder]);
          setHistory([[...newOrder]]);
          setNumShuffles(0);
        }
      }}>
        {won ? "Play Again" : (numShuffles < 3 ? "Shuffle" : "Reset")}
      </button>
      <div>
        {"Shuffles: " + numShuffles}
      </div>
    </>
  );
};
  
export default AddictionSolitaire;