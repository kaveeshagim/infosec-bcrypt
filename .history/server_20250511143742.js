"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const app = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = "sUperpassw0rd!";
const someOtherPlaintextPassword = "pass123";

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
  console.log("Hash:", hash);

  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    /*res == true or false*/
    console.log("Password match:", res);
  });
});
//END_ASYNC

//START_SYNC

//END_SYNC

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
