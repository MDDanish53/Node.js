const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

// paste the connection string with username and password
const MONGO_URL = "database_url";

// private variable
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      callback();
      // to store the database object
      _db = client.db("airbnb");
    })
    .catch((err) => console.log("Error while connecting to Mongo", err));
};

// function to provide the database access
const getDB = () => {
  if (!_db) {
    throw new Error("Mongo not connected");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
