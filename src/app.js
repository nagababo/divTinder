const express = require("express");

const app = express();

// app.use("/hello",(req, res)=>{
//     res.send("Hello hello hello!")

// })
// app.use("/hello/2",(req, res)=>{
//     res.send("abrka dabra")
// })

// app.use("/test",(req, res)=>{
//     res.send("hello from the test")
// })

// app.use("/",(req, res)=>{
//     res.send("Hello from the dashboard")
// })


// app.use("/user",(req, res)=>{

//     res.send("hahahaha")

// })

// this will only hanlde get call to /user
app.get("/user", (req, res) => {
  res.send({
    firstName: "Nagababu", lastName: "Kantamaneni",
  });
});

// this will only hanlde post call to /user
app.post("/user", (req, res) => {
//save data to DB
  res.send("Data successfully saved to the database!"
    
  );
});

app.delete("/user",(req, res)=>{
    //delete data from DB
    res.send("Data deleted successfully from the database!")
})



app.put("/user",(req, res)=>{
//put data to DB
    res.send(" put  data successfully to the database")

})
app.patch("/user",(req, res)=>{
// patched data to DB
    res.send("patched data successfully to the database")

})

app.head("/user",(req, res)=>{
    res.send("head api called")
})


// this will match all the http method api calls to /test
app.use("/test", (req, res) => {
  res.send("hello from the test");
});
app.listen(7777, () => {
  console.log("server is successfully listening to port 7777");
});
