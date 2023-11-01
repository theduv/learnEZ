import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Recieved a GET HTTP METHOD");
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
