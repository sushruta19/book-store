import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

// Middleware for parsing request having JSON body 
app.use(express.json());

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log("App is connected to Database");
    app.listen(PORT, () => {
      console.log(`App is listening to PORT: ${PORT}`);
    });    
  })
  .catch(error => {
    console.error(error);
  });

app.get("/", (req, res)=> {
  res.status(200).json({message : "Book Store App"});
});

app.use("/books", booksRoute);

process.on("SIGINT", async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from Database");
    process.exit(0);
  } catch(error) {
    console.error("Error in Process", error);
  }
});