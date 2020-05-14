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
//먼저 연결이 되야함. connection
io.on("connection", (socket) => {
  socket.on("newMessage", (message) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anon",
    }); //메세지를 보내면 닉네임과 같이 보냄.
  });
  socket.on("setNickname", ({ nickname }) => {
    //setNickname이라는 이벤트로 닉네임을 받으면 객체에 nickname을 할당한다.
    socket.nickname = nickname; //소켓은 그냥 객체임. socket.potato = 5이런것도가능함.
  });
});
