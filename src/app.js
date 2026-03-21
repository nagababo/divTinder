const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Nagababu",
    lastName: "Kantamaneni",
    emailId: "nagababo@gmail.com",
    password: "1234",
  };

  const userObj1 = {
    firstName: "Viran",
    lastName: "Kohli",
    emailId: "virat@gmail.com",
    password: "1234",
  };

  const userObj2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailId: "sachin@gmail.com",
    password: "sachins1234",
    _id: "123",
  };
  // Creating a new instance of the user model
  const user = new User({
    firstName: "Sachin1",
    lastName: "Tendulkar1",
    emailId: "sachin@gmail.com",
    password: "sachins1234",
  });
  try {
    await user.save();

    res.send("user added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("server is successfully listening to port 7777");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
