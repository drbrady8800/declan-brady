import React, {useState} from 'react';
import { BlankSpace, GameWrapper } from './styles';
import { CardComponent } from '../../../components';
import { Card, Deck } from '../../../types';
import { cardCanMove, checkWin, moveCard, shuffle } from '../../../utils/AddictionSolitaire';
  
const AddictionSolitaire: React.FC = () => {
  const [cards, setCards] = useState<Array<Card>>(shuffle(Deck));
  const [won, setWon] = useState<boolean>(false);
  const [blankHighlighted, setBlankHighlighted] = useState<boolean>(false);
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
              onDoubleClick={(e) => {
                const newOrder = moveCard(card, index, cards);
                if (newOrder !== undefined) {
                  setCards([...newOrder]);
                  const won = checkWin(newOrder);
                  if (won) {
                    setWon(true);
                  }
                }
              }}
              row={Math.floor(index / 13)}
            />
          }
        })}
      </GameWrapper>
      <button onClick={() => {
        const newOrder = shuffle(cards);
        setCards([...newOrder]);
      }}>
        {won ? "WINNER" : "Shuffle"}
      </button>
    </>
  );
};
  
export default AddictionSolitaire;