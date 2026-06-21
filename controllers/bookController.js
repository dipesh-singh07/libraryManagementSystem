const Book = require("../models/Book");

const bookController = {

    home:(req,res)=>{
        res.render("home");
    },

    getBooks: async(req,res)=>{
        const books = await Book.find();
        res.render("books",{books});
    },

    addBookPage:(req,res)=>{
        res.render("addBook");
    },

    createBook: async(req,res)=>{
        await Book.create(req.body);
        res.redirect("/books");
    },

    editBookPage: async(req,res)=>{
        const book = await Book.findById(req.params.id);
        res.render("editBook",{book});
    },

    updateBook: async(req,res)=>{
        await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.redirect("/books");
    },

    deleteBook: async(req,res)=>{
        await Book.findByIdAndDelete(req.params.id);
        res.redirect("/books");
    }

};

module.exports = bookController;