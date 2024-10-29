const router = require("express").Router();
const healthcheckHandler = require("./healthcheck");

router.use("/healthcheck", healthcheckHandler);

module.exports = router;
