import express from "express";
import { join } from "path";

import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4040 || null;
const app = express();
app.set("view engine", "pug");
app.set("views", `${__dirname}\\views`);
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", openHome);

function openHome(req, res) {
  res.render("home");
}

const handleListening = () => console.log(`✔ Server running : http://localhost:${PORT}`);
const server = app.listen(PORT, handleListening);
const io = socketIO.listen(server);

//누군가가 서버와 연결되면 sombody connected가 출력될것이다.
io.on("connection", (socket) => {
  socket.emit("hello");
  // socket.broadcast.emit("hello"); //hello라는 이벤트를 발생한다.
});
