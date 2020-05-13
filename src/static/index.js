// hello;
// eslint-disable-next-line no-undef
const socket = io("/");
//io는 (src="/socket.io/socket.io.js")안에있는 메소드이다.
//https://socket.io/docs/client-api/#io-url-options
//https://poiemaweb.com/nodejs-socketio

socket.on("hello", () => console.log("somebody say hello")); //클라이언트는 헬로이벤트를 받으면 섬바디세이헬로라는 콘솔을 답한다.
