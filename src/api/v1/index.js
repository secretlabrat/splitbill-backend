const router = require("express").Router();
const healthcheckHandler = require("./healthcheck");
const historyHandler = require("./history");

router.use("/healthcheck", healthcheckHandler);
router.use("/history", historyHandler);

module.exports = router;
