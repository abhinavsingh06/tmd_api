require("dotenv").config();

module.exports = {
  apiKey: process.env.TMDB_API_KEY,
  baseURL: "https://api.themoviedb.org/3",
};
