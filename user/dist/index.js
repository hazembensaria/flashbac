import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("this is user service");
});
app.listen(3003, () => {
    console.log("this is the server");
});
