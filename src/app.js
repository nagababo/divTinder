const express = require("express")

const app = express();

app.get("/",(req, res)=>{
    res.send("Hello from the dashboard")
})

app.get("/hello",(req, res)=>{
    res.send("Hello hello hello!")

})

app.get("/test",(req, res)=>{
    res.send("hello from the test")

})

app.listen(7777, ()=>{
    console.log("server is successfully listening to port 7777")
})