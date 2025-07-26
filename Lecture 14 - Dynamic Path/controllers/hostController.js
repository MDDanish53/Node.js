// Importing the model home.js
const Home = require("../models/home");

// Handler for addHome get method
exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }
    console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

// Handler for homeAdded post method
exports.postAddHome = (req, res, next) => {
  // destructuring req.body and extracting the following data from it
  const { houseName, pricePerNight, location, rating, photoUrl } = req.body;
  //creating object of class Home
  const home = new Home(houseName, pricePerNight, location, rating, photoUrl);
  //pushing created object in registeredHomes
  home.save();
  res.redirect("/host/host-home-list")
};

exports.postEditHome = (req, res, next) => {
  const {id, houseName, pricePerNight, location, rating, photoUrl} = req.body;
  const home = new Home(houseName, pricePerNight, location, rating, photoUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list")
}

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    });
  });
};

exports.postDeleteHome = (req, res, next) => {
  //getting homeId from request path
  const homeId = req.params.homeId;
  console.log("Came to delete", homeId)
  Home.deleteById(homeId, error => {
    if (error) {
      console.log("Error while deleting", error)
    }
    res.redirect("/host/host-home-list")
  })
}
