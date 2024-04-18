import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//Route to save a new book
router.post("/", async (req, res) => {
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

//Route to get all books from database
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      count : books.length,
      data : books
    });
  } catch(error) {
    console.error("Error in GET /books route", error);
    res.status(500).send({ message : error.message });
  }
});

//Route to get one book from database by id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if(!book) {
      return res.status(404).json({message : "Not Found"});
    }
    res.status(200).json(book);
  } catch(error) {
    console.error("Error in GET /books/:id route", error);
    res.status(500).send({ message : error.message });
  }
});

//Route to update a book by ID
router.put("/:id", async (req, res) => {
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
    const result = await Book.findByIdAndUpdate(req.params.id, req.body);
    if(!result) {
      return res.status(404).json({message : "Book Not Found"});
    }    
    res.status(200).json({message : "Successfully Updated Book"});

  } catch(error) {
    console.error("Error in PUT /books/:id route", error);
    res.status(500).send({ message : error.message });
  }
})

//Route to delete a book by ID
router.delete("/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if(!result) {
      return res.status(404).json({message : "Book Not Found"});
    }    
    res.status(200).json({message : "Successfully Deleted Book"});
  } catch(error) {
    console.error("Error in DELETE /books/:id route", error);
    res.status(500).send({ message : error.message });
  }
});

export default router;