// Core Modules
const path = require("path");

// External Modules
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
//Mongo cluster url
const DB_PATH =
  "database_url";
const errorController = require("./controllers/error");
const todoItemsRouter = require("./routes/todoItemsRouter");

const app = express();

app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);

// Error message for not handled paths
app.use(errorController.pageNotFound);

const port = 3000;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(port, () => {
      console.log(`server running on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo:", err);
  });
