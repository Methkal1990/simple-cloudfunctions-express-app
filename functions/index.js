const functions = require("firebase-functions");
const express = require("express");
const hellos = require("./routes/hellos");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const app = express();

app.use("/hellos", hellos);

module.exports.hellosAPI = functions.https.onRequest(app);
