const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorm");

dotenv.config();

connectDB();
const app = express();

app.use(express.json()); // to accept json data in the body

app.get("/", (req, res) => {
  res.send("Hello World in Express");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log("Server started on port ${PORT}".yellow.bold));
