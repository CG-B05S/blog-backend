const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")

app.use('/home', data1)

app.listen(4000,()=>{
    console.log("server running");
})