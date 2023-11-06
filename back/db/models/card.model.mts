import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  front: String,
  back: String,
  decks: Array<String>,
  createdAt: Date,
});

const Card = mongoose.model("Card", cardSchema);
export default Card;
