const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ status: 200, message: "Ready" });
});


module.exports = router