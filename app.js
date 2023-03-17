const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const result = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  response.send(result);
});

module.exports = app;
