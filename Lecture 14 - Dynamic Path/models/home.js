// Core Module
const path = require("path");
const fs = require("fs");

// Local Module
const rootDir = require("../utils/pathUtils");
const Favourite = require("./favourite");
//path of homes.json
const homeDataPath = path.join(rootDir, "data", "homes.json");
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
      if(this.id) {
        registeredHomes = registeredHomes.map(home => home.id === this.id ? this : home);
      } else { 
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
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
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    Home.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === homeId)
      callback(homeFound)
    })
  }

  static deleteById(homeId, callback) {
    Home.fetchAll(homes => {
      homes = homes.filter(home => home.id !== homeId)
      fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
        Favourite.deleteById(homeId, callback)
      });
    })
  }
};
