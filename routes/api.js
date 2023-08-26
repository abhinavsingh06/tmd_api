const express = require("express");
const router = express.Router();
const axios = require("axios");
const Todo = require("../models/todo");
const apiConfig = require("../apiConfig");

// router.get("/todos", (req, res, next) => {
//   // This will return all the data, exposing only the id and action field to the client
//   Todo.find({}, "action")
//     .then((data) => res.json(data))
//     .catch(next);
// });

// router.post("/todos", (req, res, next) => {
//   if (req.body.action) {
//     Todo.create(req.body)
//       .then((data) => res.json(data))
//       .catch(next);
//   } else {
//     res.json({
//       error: "The input field is empty",
//     });
//   }
// });

// router.delete("/todos/:id", (req, res, next) => {
//   Todo.findOneAndDelete({ _id: req.params.id })
//     .then((data) => res.json(data))
//     .catch(next);
// });

console.log(apiConfig.apiKey);

router.get("/api/popular-movies", async (req, res) => {
  try {
    const response = await axios.get(`${apiConfig.baseUrl}/movie/${apiKey}/popular`, {
      params: {
        api_key: apiConfig.apiKey,
      },
    });

    const popularMovies = response.data.results;
    res.json(popularMovies);
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    res.status(500).json({ error: "Error fetching popular movies" });
  }
});

module.exports = router;
