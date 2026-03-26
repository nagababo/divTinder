const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);

  // Creating a new instance of the user model
  const user = new User(req.body);
  try {
    await user.save();

    res.send("user added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});
//Feed API - GET/Feed Get all the users from the database
app.get("",()=>{

})

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
