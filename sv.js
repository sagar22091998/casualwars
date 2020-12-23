const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//Routes
const mainRoutes = require('./routes/mainRoutes')

const app = express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  next()
})

app.use('/',mainRoutes);

app.use((error,req,res,next)=>{
  console.log("Error is :-",error);
  const message = error.message;
  const statusCode = error.statusCode;
  res.status(statusCode).json({
    message
  })
})

mongoose.connect(`mongodb+srv://sagar22091998:123123123@jovetic.gaem1.mongodb.net/revival?retryWrites=true&w=majority`)
.then(result =>{
  app.listen(8080);
})
.catch( err => console.log("Could Not Create the Server"));
