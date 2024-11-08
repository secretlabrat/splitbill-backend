const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.SERVERPORT || 3000;
const apiRoute = require("./api");

app.use(
  cors({ origin: ["https://splitbill.kidkrub.me/", "http://localhost"] })
);

app.use(express.json());
app.use(apiRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
