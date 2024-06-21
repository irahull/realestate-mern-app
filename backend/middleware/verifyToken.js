const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: "Token not found" });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
      if (err) return res.status(401).json({ msg: "Invalid token" });
      req.userId = data.id;
      
      next();
    });
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized" });
    console.log(error);
  }
};

module.exports=verifyToken
