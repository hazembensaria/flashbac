import express from "express";


const app = express();

app.get("/" , (req , res)=>{
    res.json("hello from the server")
});

app.listen(3001 , ()=>{
    console.log("this is the server")
})