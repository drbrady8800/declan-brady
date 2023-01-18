export interface Card {
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  suit: "♣️" | "♦️" |  "♥️" |  "♠️";
  color: "#000000" | "#FF0000";
  text: "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
}

export const suits = ["♣️", "♦️", "♥️", "♠️"];
const cardTexts = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export const Deck: Array<Card> = suits.map((suit) => {
  return cardTexts.map((text, index) => {
    const number = index + 1;
    const color = (suit === "♣️" || suit === "♠️") ? "#000000" : "#FF0000";
    return {
      number,
      suit,
      color,
      text,
    } as Card;
  });
}).flat();