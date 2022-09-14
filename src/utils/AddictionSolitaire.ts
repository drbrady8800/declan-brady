import { Card } from "../types";

export const cardCanMove = (clickedCard: Card, deck: Array<Card>): number | undefined => {
  // Special case: the card is a two, must go in a first index
  if (clickedCard.number === 2) {
    for (let i = 0; i < deck.length - 1; i+=13) {
      if (deck[i].number === 1) {
        return i;
      }
    }
  } else {
    for (let i = 0; i < deck.length - 1; i++) {
      // Find the card that is one less and of the same suit
      if (clickedCard.number - 1 === deck[i].number && clickedCard.suit === deck[i].suit) {
        // If the space after that card is open return its index
        if (deck[i + 1].number === 1 && i % 13 !== 12) {
          return i + 1;
        }
      }
    }
  }
  return -1;
}

export const moveCard = (clickedCard: Card, clickedIndex: number, deck: Array<Card>): Array<Card> | undefined => {
  const swapIndex = cardCanMove(clickedCard, deck);
  if (swapIndex !== -1) {
    // Swap the cards
    const temp = deck[swapIndex];
    deck[swapIndex] = deck[clickedIndex];
    deck[clickedIndex] = temp;
    return deck;
  } else {
    return undefined;
  }
}

export const shuffle = (deck: Array<Card>): Array<Card> => {
  let correctPositions: Array<Array<Card>> = [];
  let incorrectPositions: Array<Array<Card>> = [];
  for (let i = 0; i < deck.length - 1; i+=13) {
    let correctRow = [];
    if (deck[i].number === 2) {
      correctRow.push(deck[i]);
      // Push the rest of the cards in the correct order in that row
      for (let j = 1; j < 13; j++) {
        if (deck[i + j].number === j + 2 && deck[i + j].suit === deck[i].suit) {
        correctRow.push(deck[i + j]);
        } else {
          incorrectPositions.push(deck.slice(i + j, i + 13));
          break;
        }
      }
    } else {
      incorrectPositions.push(deck.slice(i, i + 13));
    }
    correctPositions.push(correctRow);
  }
  // Shuffle the rest of the deck
  let shuffled = incorrectPositions.flat().sort(() => Math.random() - 0.5);
  // Put the correct rows back in the deck
  for (let i = 0; i < correctPositions.length; i++) {
    shuffled.splice(i * 13, 0, ...correctPositions[i]);
  }
  return shuffled;
}

export const checkWin = (deck: Array<Card>): boolean => {
  for (let i = 0; i < deck.length - 1; i+=13) {
    if (deck[i].number !== 2) {
      return false;
    } else {
      for (let j = 1; j < 12; j++) {
        if (deck[i + j].number !== j + 2 || deck[i + j].suit !== deck[i].suit) {
          return false;
        }
      }
    }
  }
  return true;
}