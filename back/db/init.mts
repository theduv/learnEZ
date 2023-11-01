import mongoose from "mongoose";

const initDb = async () => {
  if (!process.env.ATLAS_URI) {
    throw new Error("Could not connect to db");
  } else {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to db");
  }
};

export default initDb;
