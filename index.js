const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    console.log("server is running on",PORT)
    res.send({"hi":"there "});
})

const PORT = process.env.PORT||4000

app.listen(PORT);