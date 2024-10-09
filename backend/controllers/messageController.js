const prisma = require("../utils/prisma");

const addMessage = async (req, res) => {
  const inputs = req.body;
//   console.log(inputs);
  try {
    const createMsg = await prisma.messages.create({
      data: {
        name: inputs.name,
        email: inputs.email,
        contact: inputs.contact,
        subject: inputs.subject,
        message: inputs.message,
      },
    });
    res.status(200).json({ msg: "message send successfully", success: true, data: createMsg });
  } catch (error) {
    console.log("error to add message");
    res.status(300).json({ msg: "failed to send message", success: false });
  }
};

module.exports = { addMessage };
