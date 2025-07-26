// Core Modules
const path = require("path");

// External Modules
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
//Mongo cluster url
const DB_PATH =
  "mongodb+srv://root:root@cluster0.zuna3ft.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Cluster0";

// Local Module (Route)
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtils");
const errorController = require("./controllers/error");
const { default: mongoose } = require("mongoose");

const app = express();

// telling the view engine name
app.set("view engine", "ejs");
// telling where we want to use ejs engine
app.set("views", "views");

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: "sessions",
});

//this will log req.url and req.method for all requests
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(
  session({
    secret: "Mohammad Danish",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});

app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);

// to make the public folder accessible
app.use(express.static(path.join(rootDir, "public")));

// Error message for not handled paths
app.use(errorController.error);

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
