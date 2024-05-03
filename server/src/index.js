const express = require("express");
const cors=require("cors");
const axios=require("axios");



const app = express();


//middle ware

app.use(express.json());
app.use(cors());


//listin to a port
app.listen(5000, ()=>{
    console.log("server started");
})


