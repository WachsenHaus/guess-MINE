//이벤트를 듣는 컨트롤러.
//이벤트를 수신하고 행동을 취한다.

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
  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });

  socket.on(events.beginPath, ({ x, y }) =>
    broadcast(events.beganPath, { x, y })
  );

  socket.on(events.strokePath, ({ x, y, color }) => {
    broadcast(events.strokedPath, { x, y, color });
  });

  //fill이벤트를 받으면 filled이벤트를 브로드캐스트할거야.
  socket.on(events.fill, ({ color }) => {
    broadcast(events.filled, { color });
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
