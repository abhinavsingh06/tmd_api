require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

const app = express();

const port = process.env.PORT || 3000;
console.log("DB Connection URI:", process.env.DB);

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

// app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.use((req, res, next) => {
  res.send("Welcome to Express");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
