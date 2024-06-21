const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = require("../utils/prisma.js");

const home = async (req, res) => {
  try {
    res.send("this ia home section");
  } catch (error) {
    console.log(error);
  }
};
// ____________________________________ Register APi

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "filled the proper data" });
    }
    //   _______________________hashed password_________________________

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    if (newUser) {
      res.status(201).json({
        success: true,
        msg: "User Created Successfully",
        // token: await newUser.generateToken(),
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Failed to create user",
    });
  }
};

// // ____________________________________ Login APi

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ msg: "Fill data" });
    }

    const checkUser = await prisma.user.findUnique({ where: { username } });

    if (!checkUser) {
      return res.status(400).json({ msg: "User Not Found" });
    }

    const checkPass = await bcrypt.compare(password, checkUser.password);

    if (!checkPass) return res.status(400).json({ msg: "password not match" });

    const { password: userPassword, ...userInfo } = checkUser;

    const time = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign({ id: checkUser.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: time,
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + time),
        // secure: true,
      })
      .status(200)
      .json({
        success: true,
        user: userInfo,
        msg: "User Login Successfull",
      });
  } catch (error) {
    res.status(400).json({ msg: "internal server error" });
  }
};

const logout = (req, res) => {
  try {
    res
      .clearCookie("token")
      .status(200)
      .json({ success: true, msg: "Logout Successfull" });
  } catch (error) {
    res.status(404).json({ msg: "404 error" });
  }
};

module.exports = { home, register, login, logout };
