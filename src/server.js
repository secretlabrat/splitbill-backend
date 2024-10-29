const express = require("express");
const app = express();
const port = process.env.SERVERPORT || 3000;
const apiRoute = require("./api");

app.use(apiRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
