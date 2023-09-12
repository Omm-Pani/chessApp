const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const { register, login } = require("./user");

//--------- socket connection ---------//
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send-message", (message, room) => {
    if (room === "") {
      socket.broadcast.emit("receive-message", message);
    } else {
      socket.join(room);
      io.to(room).emit("receive-message", message);
    }
  });
});

//ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/register", register);
app.post("/login", login);

//Database
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log("Database Succesfully connected"))
  .catch((err) => console.error(err));

httpServer.listen(4000, () => {
  console.log(`Server listening on port 4000`);
});
