/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import express from "express";
import { join } from "path";

import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4040 || null;
const app = express();
app.set("view engine", "pug");
app.set("views", `${__dirname}\\views`);
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", openHome);

function openHome(req, res) {
  res.render("home", { events: JSON.stringify(events) });
}

const handleListening = () =>
  console.log(`✔ Server running : http://localhost:${PORT}`);
const server = app.listen(PORT, handleListening);
const io = socketIO.listen(server);

//누군가가 서버와 연결되면 sombody connected가 출력될것이다.
//먼저 연결이 되야함. connection
//io.on("connection", (socket) => socketController(socket));
io.on("connection", (socket) => socketController(socket, io));
