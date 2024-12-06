const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.SERVERPORT || 3000;
const apiRoute = require("./api");

app.use(
  cors({
    origin: [
      "https://splitbill.kidkrub.me",
      "https://splitbill-aws.kidkrub.me",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      "http://localhost:8080",
      "http://127.0.0.1:8080",
    ],
  })
);

app.use(express.json());
app.use(apiRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
