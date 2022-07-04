// console.log("this is server.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.listen(3000, function () {
  console.log("listening on 3000");
  console.log("New message");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  // do something here
  console.log("get method call");
   res.send("Hello World");
});

app.post("/quotes", (req, res) => {
  console.log("Hellooooooooooooooooo!");
   console.log(req.body);
  res.send("Hello World");
});

const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb-connection-string", (err, client) => {
  // ... do something here
  console.log("this is mongodb server");
});