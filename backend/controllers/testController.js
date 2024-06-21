const test = (req, res) => {
    console.log(req.userId)
  res.status(200).json({ msg: "Token Working" });
};

module.exports = { test };
