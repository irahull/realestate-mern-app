const prisma = require("../utils/prisma");
const bcrypt = require("bcryptjs");

const getUsers = async (req, res) => {
  const allUser = await prisma.user.findMany();
  const { password, ...totalUsers } = allUser;
  return res.status(200).json({ data: totalUsers });
};

const getUser = async (req, res) => {
  const id = req.params.id;
  if (req.userId !== id) return res.status(401).json({ msg: "Invalid Action" });

  try {
    const getUser = await prisma.user.findUnique({ where: { id } });
    const { password, ...userData } = getUser;
    return res.status(200).json({ msg: true, data: userData });
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { password, avatar, ...inputs } = req.body;
  if (req.userId !== id) return res.status(401).json({ msg: "Invalid Action" });

  let updatedPass = null;

  try {
    if (password) {
      updatedPass = await bcrypt.hash(password, 10);
    }

    const upadtedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPass && { password: updatedPass }),
        ...(avatar && { avatar }),
      },
    });

    res.status(200).json({
      success: true,
      msg: "User updated successfully",
      data: upadtedUser,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  if (req.userId !== id) return res.status(401).json({ msg: "Invalid Action" });

  const deletedUser = await prisma.user.delete({ where: { id } });
  res.status(200).json({ success: true, msg: "User deleted Successfully" });
};

module.exports = { getUsers, getUser, updateUser, deleteUser };
