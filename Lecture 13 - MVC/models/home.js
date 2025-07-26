// Core Module
const path = require("path");
const fs = require("fs");

// Local Module
const rootDir = require("../utils/pathUtils");

// Fake Database
let registeredHomes = [];

module.exports = class Home {
  constructor(houseName, pricePerNight, location, rating, photoUrl) {
    this.houseName = houseName;
    this.pricePerNight = pricePerNight;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  // function to push created object in registeredHomes
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      //path of homes.json
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      //writing data
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File writing concluded", error);
      });
    });
  }

  // function of class Home to return the registeredHomes variable
  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      console.log("File read: ", err, data);``
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
