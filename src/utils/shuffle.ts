import { Card } from "../types";

export const shuffle = (deck: Array<Card>): Array<Card> => {
  return deck.sort(() => Math.random() - 0.5);
}
