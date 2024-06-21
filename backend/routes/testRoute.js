const { test } = require("../controllers/testController");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.route("/test").get(verifyToken,test);

module.exports = router;
