const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(
      "mongodb+srv://root:Josue0908$@cluster1.a15f6mk.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas connected successfully"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
