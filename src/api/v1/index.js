const router = require("express").Router();
const healthcheckHandler = require("./healthcheck");
const historyHandler = require("./histories");

router.use("/healthcheck", healthcheckHandler);
router.use("/histories", historyHandler);

module.exports = router;
