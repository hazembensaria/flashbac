import express from "express";


const app = express();

app.get("/" , (req, res)=>{
    res.json("hello from the server 1")
});

app.listen(3002 , ()=>{
    console.log("this is the server")
})