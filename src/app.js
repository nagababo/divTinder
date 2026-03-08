const express = require("express");

const app = express();


// app.get("/user/:userId/:name/:password", (req, res) => {

//   console.log(req.query);
//   console.log(req.params);
//   res.send({
//     firstName: "Nagababu",
//     lastName: "Kantamaneni",
//   });
// });

app.get("/user", (req, res) => {

  console.log(req.query);
  res.send({
    firstName: "Nagababu",
    lastName: "Kantamaneni",
  });
});


app.listen(7777, () => {
  console.log("server is successfully listening to port 7777");
});
