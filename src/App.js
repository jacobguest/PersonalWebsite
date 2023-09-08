import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="navigation">
        <Navbar></Navbar>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
