const router = require("express").Router();
const v1Handler = require("./v1");

router.use("/v1", v1Handler);

module.exports = router;
