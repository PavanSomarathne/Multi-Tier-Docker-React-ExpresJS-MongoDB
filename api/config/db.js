const mongoose = require("mongoose");

const connectionString = "mongodb://mongo:27017/multi-tier-docker-db";

const db = async () => {
  const connection = await mongoose
    .connect(connectionString)
    .catch((err) => console.log(err));
  console.log(`Connected to MongoDB: ${connection.connection.host}`);
};

module.exports = db;
