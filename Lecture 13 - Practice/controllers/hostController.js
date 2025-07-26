// Importing the model home.js
const Home = require("../models/home");

// Handler for addHome get method
exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", { pageTitle: "Add Home", currentPage: "addHome" });
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
  res.render("host/home-added", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    console.log(registeredHomes);
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    });
  });
};