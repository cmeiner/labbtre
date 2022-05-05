import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../../../types";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io({
  autoConnect: false,
});

function WelcomePage() {
  const [nameInput, setNameInput] = useState("");
  const navigate = useNavigate();
  let checkName = async () => {
    socket.auth = { nickname: nameInput };
    await socket.connect();
    navigate("/rooms");
  };
  return (
    <div className="main-div">
      <h1>
        Welcome to W
        <FontAwesomeIcon icon={faMagicWandSparkles} id="logoIcon" />
        zcord!
      </h1>
      <div className="inputNameContainer">
        <h3 className="nameInputHeader">Enter your nickname!</h3>
        <input
          onChange={(e) => setNameInput(e.target.value)}
          type="text"
          className="nameInput"
        />
        <button className="nameInputButton" onClick={checkName}>
          Enter!
        </button>
      </div>
    </div>
  );
}
export default WelcomePage;
