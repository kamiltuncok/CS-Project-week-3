const express=require('express');
const mongoose = require("mongoose");
const bodyparser=require('body-parser');

require('dotenv/config');

const app=express();

app.use(bodyparser.json());

const postroute=require('./routes/posts.js');

app.use('/posts',postroute)


mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser:true,
    useUnifiedTopology: true 
  },
  () => console.log("connected to db")
  
  
)



app.listen(5000);



