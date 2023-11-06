import mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
  title: String,
  belongsTo: String,
  cards: Array,
  createdAt: Date,
});

const Deck = mongoose.model("Deck", deckSchema);
export default Deck;
