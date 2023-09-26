import React, { useState } from "react";
import { socket } from "../socket";

export function ConnectionManager({ id }) {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");

  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  socket.on("receive-message", (message) => {
    console.log(message);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`message= ${message} room= ${room}`);
    if (message === "") return;
    socket.emit("send-message", message, room);
  };

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>

      <form onSubmit={handleSubmit}>
        <label>
          Enter message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <label>
          Enter a room:
          <input
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
