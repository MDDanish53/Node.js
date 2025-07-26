// Importing the model home.js
const Home = require("../models/home");

// Handler for addHome get method
exports.getAddHome = (req, res, next) => {
  res.render("addHome", { pageTitle: "Add Home", currentPage: "addHome" });
};

// Handler for homeAdded post method
exports.postAddHome = (req, res, next) => {
  console.log("Home Registration Successful for: ", req.body);
  // destructuring req.body and extracting the following data from it
  const { houseName, pricePerNight, location, rating, photoUrl } = req.body;
  //creating object of class Home
  const home = new Home(houseName, pricePerNight, location, rating, photoUrl);
  //pushing created object in registeredHomes
  home.save();
  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};

// Handler for / home page
exports.getHomes = (req, res, next) => {
  //storing registeredHomes variable in below variable and passing it to home.ejs
  // calling fetchAll function of Home class
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    console.log(registeredHomes);
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "home",
    });
  });
};
