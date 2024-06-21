const router = require("express").Router();
const { home, register, login, logout } = require("../controllers/authController");

router.route("/").get(home);
router.route("/register").post(register);
router.route("/login").post(login)
router.route("/logout").post(logout)

module.exports = router;
