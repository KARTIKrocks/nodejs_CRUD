const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/TO-DO").then(() => {
  console.log("connection is successful");
}).catch((e) => {
  console.log("No connection");
  console.log(e);
})