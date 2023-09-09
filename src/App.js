import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage";

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
          <Route path="projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
