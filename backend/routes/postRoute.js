const router = require("express").Router();
const {
  getAllPost,
  getSinglePost,
  addPost,
  updatePost,
  deletePost,
  userPosts
  // savePost
} = require("../controllers/postController");
const verifyToken = require("../middleware/verifyToken");

router.route("/all").get(getAllPost);
router.route("/:id").get(getSinglePost);
router.route("/add").post(verifyToken, addPost);
router.route("/update/:id").put(verifyToken, updatePost);
router.route("/delete/:id").delete(verifyToken, deletePost);
router.route("/user/profilePosts").get(verifyToken, userPosts);

// router.route("/save").post(verifyToken, savePost);

module.exports = router;
