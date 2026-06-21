const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

// Home
router.get("/", bookController.home);

// View All Books
router.get("/books", bookController.getBooks);

// Add Book Page
router.get("/addbook", bookController.addBookPage);

// Create Book
router.post("/createbook", bookController.createBook);

// Edit Book Page
router.get("/edit/:id", bookController.editBookPage);

// Update Book
router.post("/update/:id", bookController.updateBook);

// Delete Book
router.get("/delete/:id", bookController.deleteBook);

module.exports = router;