import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';

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
  res.status(200).send("ddd");
});

//Route to save a new book
app.post("/books", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear
    ) {
      return res.status(400).send({
        message : 'Send all required fields: title, author, publishYear'
      });
    }

    const newBook = {
      title : req.body.title,
      author : req.body.author,
      publishYear : req.body.publishYear
    }

    const book = await Book.create(newBook);
    return res.status(201).send(book);

  } catch(error) {
    console.error("Error in POST /books route", error);
    res.status(500).send({ message : error.message });
  }
});



process.on("SIGINT", async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from Database");
    process.exit(0);
  } catch(error) {
    console.error("Error in Process", error);
  }
});