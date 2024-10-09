const express = require("express");
const cookieParser = require("cookie-parser");
var cors = require("cors");
const app = express();
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const testRoute = require("./routes/testRoute");
const messageRoute = require("./routes/messageRoute");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// ______________________ Middleware ________________________

app.use(cors({ origin:  process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// ______________________ Routes ________________________

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/message", messageRoute);
app.use("/api/", testRoute);

// ______________________ Server ________________________
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
