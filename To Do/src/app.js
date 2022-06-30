const express = require('express');
const {model,schema} = require('./models/schemaModel');
require('./DATABASE/conn');
const myrouter = require("./router/tasks");

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(myrouter);




app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
})