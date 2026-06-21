const express = require("express");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");

const logger = require("./middleware/logger");

app.use(logger);

// Routes
app.use("/", bookRoutes);

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});