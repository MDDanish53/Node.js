// Importing the model home.js
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  //storing registeredHomes variable in below variable and passing it to home.ejs
  // calling fetchAll function of Home class
  Home.fetchAll((registeredHomes) => {
    console.log(registeredHomes);
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};

// Handler for / home page
exports.getHomes = (req, res, next) => {
  //storing registeredHomes variable in below variable and passing it to home.ejs
  // calling fetchAll function of Home class
  Home.fetchAll((registeredHomes) => {
    console.log(registeredHomes);
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    console.log(registeredHomes);
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    });
  });
};
