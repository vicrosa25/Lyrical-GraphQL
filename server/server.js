const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const schema = require("./schema/schema");

// Express
const app = express();

// Replace with your mongoLab URI
const MONGO_URI =
  "mongodb+srv://root:root@cluster0-alag1.mongodb.net/lyricaldb";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection
  .once("open", () => console.log("Connected to Mongo Atlas"))
  .on("error", (error) =>
    console.log("Error connecting to Mongo Atlas:", error)
  );

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening");
});
