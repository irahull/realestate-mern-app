const router = require("express").Router();
const { getUsers, getUser, updateUser, deleteUser } = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");


router.route("/getUsers").get( getUsers);
router.route("/getUser/:id").get(verifyToken, getUser);
router.route("/update/:id").put(verifyToken,updateUser)
router.route("/delete/:id").delete(verifyToken,deleteUser)

module.exports = router;
