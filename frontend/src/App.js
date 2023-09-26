import React from "react";
import { useState, useEffect } from "react";
import Chessboard from "./components/chessboard/chessboard";

// import Login from "./login";
// import { socket } from "./socket";
// import { ConnectionState } from "./components/connectionState";
// import { ConnectionManager } from "./components/connectionManager";

function App() {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  const [isWhite, setIsWhite] = useState(false);

  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);
  //     console.log(`your id: ${socket.id}`);
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

  //   socket.on("connect", onConnect);
  //   socket.on("disconnect", onDisconnect);

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //   };
  // }, []);

  return (
    <div className="App">
      {/* <Login /> */}
      <Chessboard isWhite={isWhite} />
      {/* <ConnectionState isConnected={isConnected} />
      <ConnectionManager /> */}
    </div>
  );
}

export default App;
