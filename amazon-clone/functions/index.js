const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
//  secret key: (stripe)(secret_key)
const stripe = require("stripe")(
  "sk_test_51K9R6lSINmMx78lgyefKAdY6R0wlqw6WwP1pFAonq09i2OFmEnIC3KmP7JMEZ1MZTRejpLm6gJxMWw9XF9osgm7A003RvyTOoJ"
);
// API

//  App config
const app = express();
// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());
// API ROUTES
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment req received Boom!! for amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency,
    currency: "usd",
  });
  // OK-Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listening
exports.api = functions.https.onRequest(app);
