import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import dateModel from "./DB/models/date.js";
import connectDB from "./DB/connecDB.js";
const port = 5000;
const app = express();
app.use(cors());
app.use("/", (req, res, next) => {
  res.status(200).json({ message: "Done" });
});

connectDB()
const server = app.listen(port, () =>
  console.log(`running on port..............${port}`)
);

const io = new Server(server, {
  cors: "*",
});


io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("requestDates", async () => {
    const dates = await dateModel.find()
    socket.emit("getAllDates", dates)
  }
  )



  socket.on("feDate", async (frontDate) => {
    const message = await dateModel.create({ frontDate, backDate: new Date() })
    socket.emit("beDate", message)
  });
});
