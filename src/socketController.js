import events from "./events";
const socketController = (socket) => {
  const broadcast = (event, data) => {
    socket.broadcast.emit(event, data); //이벤트 , 전달된 데이터.
  };

  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname });
  });
  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
  });
  //   socket.on("newMessage", (message) => {
  //     socket.broadcast.emit("messageNotif", {
  //       message,
  //       nickname: socket.nickname || "Anon",
  //     }); //메세지를 보내면 닉네임과 같이 보냄.
  //   });
  //   socket.on("setNickname", ({ nickname }) => {
  //     //setNickname이라는 이벤트로 닉네임을 받으면 객체에 nickname을 할당한다.
  //     socket.nickname = nickname; //소켓은 그냥 객체임. socket.potato = 5이런것도가능함.
  //   });
};
export default socketController;
