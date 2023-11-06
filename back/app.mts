import "dotenv/config";
import express from "express";
import initDb from "./db/init.mjs";
import bodyParser from "body-parser";
import User from "./db/models/user.model.mjs";
import cors from "cors";
import Deck from "./db/models/deck.model.mjs";
import Card from "./db/models/card.model.mjs";
import { ObjectId } from "mongodb";

await initDb();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Recieved a GET HTTP METHOD");
});

app.get("/getUserData", async (req, res) => {
  const { userId } = req.query;

  const targetUser = await User.findById(userId);

  if (targetUser) {
    const response = (({ password, ...o }) => o)(targetUser._doc);
    res.status(200).json(response);
  }
  res.status(404);
});

app.post("/createDeck", async (req, res) => {
  const { title, userId } = req.body;

  const newDeck = new Deck({
    title,
    belongsTo: userId,
    cards: [],
    createdAt: new Date(),
  });
  const deckObject = await newDeck.save();
  const deckId = deckObject.id;

  await User.findByIdAndUpdate(userId, {
    $set: { decks: deckId },
  });

  res.status(201).json({ deckId });
});

app.get("/getDecksFromUser", async (req, res) => {
  const { userId } = req.query;

  const targetDecks = await Deck.find({ belongsTo: userId });
  res.status(200).json(targetDecks);
});

app.delete("/deleteDeck/:id", async (req, res) => {
  const { id } = req.params;

  await Deck.findByIdAndDelete(id);
  res.status(204).send("Deleted");
});

app.delete("/card/delete/:id", async (req, res) => {
  const { id } = req.params;

  //TODO: remove from deck
  await Card.findByIdAndDelete(id);
  res.status(204).send("Deleted");
});

app.get("/deck/get", async (req, res) => {
  const { deckId } = req.query;

  const targetDeck = await Deck.findById(deckId);

  res.status(200).json(targetDeck);
});

app.post("/card/create", async (req, res) => {
  const { deckId, front, back } = req.body;
  const id = new ObjectId();

  const newCard = new Card({
    _id: id,
    front,
    back,
    decks: [new ObjectId(deckId?.toString())],
    createdAt: new Date(),
  });
  newCard.save();
  const targetDeck = await Deck.findById(deckId);
  targetDeck?.cards.push(id);
  targetDeck?.save();
  console.log(id);
  res.status(201).json(newCard);
});

app.delete("/card/:id", async (req, res) => {
  const { id } = req.params;

  await Card.findByIdAndDelete(id);
  res.status(204).send("Deleted");
});

app.get("/cards/get", async (req, res) => {
  const { deckId } = req.query;
  if (!deckId || typeof deckId !== "string") {
    res.status(400).send("Error");
    return;
  }
  const targetCards = await Card.find({
    decks: new ObjectId(deckId),
  });
  res.status(200).json(targetCards);
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
