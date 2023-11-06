import Card from "./card";

type Deck = {
  _id: string;
  title: string;
  belongsTo: string;
  cards: Array<Card>;
};

export default Deck;
