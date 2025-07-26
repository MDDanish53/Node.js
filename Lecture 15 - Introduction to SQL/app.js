// Core Modules
const path = require("path");

// External Modules
const express = require("express");

// Local Module (Route)
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");
const errorController = require("./controllers/error");

const app = express();

// telling the view engine name
app.set("view engine", "ejs");
// telling where we want to use ejs engine
app.set("views", "views");

//this will log req.url and req.method for all requests
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

// to make the public folder accessible
app.use(express.static(path.join(rootDir, "public")));

// Error message for not handled paths
app.use(errorController.error);

const port = 3000;
app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
