import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../../types";
import RoomsPage from "./components/RoomsPage";
import WelcomePage from "./components/WelcomePage";
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io({autoConnect: false,})

function App() {
  socket.connect()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
