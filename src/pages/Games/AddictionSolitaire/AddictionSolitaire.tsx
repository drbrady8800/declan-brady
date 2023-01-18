import React, { useState, useEffect } from 'react';
import { BlankSpace, GameWrapper } from './styles';
import { CardComponent } from '../../../components';
import { Card, Deck } from '../../../types';
import { cardCanMove, checkWin, moveCard, nextCardIndex, shuffle } from '../../../utils/AddictionSolitaire';
  
const AddictionSolitaire: React.FC = () => {
  const [cards, setCards] = useState<Array<Card>>(shuffle(Deck));
  const [won, setWon] = useState<boolean>(false);
  const [blankHighlighted, setBlankHighlighted] = useState<Array<number>>([]);
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

  const onHighlightBlank = (card: Card) => {
    const swapIndex = cardCanMove(card, cards);
    setBlankHighlighted([swapIndex]);
    setTimeout(() => setBlankHighlighted([]), 750);
  }

  const onHighlightCard = (index: number) => {
    const nextIndexes = nextCardIndex(index, cards);
    setBlankHighlighted(nextIndexes);
    setTimeout(() => setBlankHighlighted([]), 750);
  }

  return (
    <>
      <GameWrapper className="p-35">
        {cards.map((card, index) => {
          if (card.number === 1) {
            return (
              <BlankSpace
                className={blankHighlighted.find((i) => i === index) ? "flash" : ""}
                column={index % 13}
                key={index}
                onClick={() => onHighlightCard(index)}
                row={Math.floor(index / 13)}
              />
            );
          } else {
            return <CardComponent
              canCardMove={cardCanMove(card, cards) !== -1}
              card={card}
              className={blankHighlighted.find((i) => i === index) ? "flash" : ""}
              column={index % 13}
              key={index}
              onDoubleClick={() => onMoveCard(card, index)}
              onSingleClick={() => onHighlightBlank(card)}
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