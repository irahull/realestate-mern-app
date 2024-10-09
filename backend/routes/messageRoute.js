const router = require("express").Router();
const { addMessage } = require("../controllers/messageController");


router.route("/").post( addMessage);


module.exports = router;
