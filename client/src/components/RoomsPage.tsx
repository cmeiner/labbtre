import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../../../types";
import CreateNewRoom from "./CreateNewRoom";
function Rooms() {
  // const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io({
  //   autoConnect: false,
  // });

  // SKRIVA EN FUNKTION FÖR ATT FÅ UT RUM
  // TITTA EFTER OM ARRAYEN INNEHÅLLER NÅGOT
  //
  return (
    <div>
      <div>
        <h3>Pick a room</h3>
      </div>
      <div>
        <h3>Create a new room</h3>
        <CreateNewRoom />
      </div>
    </div>
  );
}

export default Rooms;
