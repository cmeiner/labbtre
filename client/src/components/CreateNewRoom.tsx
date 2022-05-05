import { useState } from "react";
import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../../../types";
function CreateNewRoom() {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io({
    autoConnect: false,
  });
  const [roomName, setRoomName] = useState("");
  const [roomList, setRoomList] = useState([])
  socket.on('roomList', (rooms : any) => {
    setRoomList(rooms)
  })
  return (
    <div>
      <div className="inputContainer">
        <input
          onChange={(e) => setRoomName(e.target.value)}
          id="roomInput"
          type="text"
        />
        <button
          onClick={() => {
            if (!roomName.length) {
              alert("Du måste skriva något");
              return;
            }
            socket.emit("join", roomName);
            console.log("room name:", roomName);
          }}
        >
          Skapa Rum
        </button>
      </div>
      {roomList.length > 0 && roomList.map((index, room) => (
        <div key={index}>{room}</div>
      ))}
    </div>
  );
}

export default CreateNewRoom;
