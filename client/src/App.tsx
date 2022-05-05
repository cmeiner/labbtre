import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoomsPage from "./components/RoomsPage";
import WelcomePage from "./components/WelcomePage";

function App() {
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

export default App;
