const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas connected successfully"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
