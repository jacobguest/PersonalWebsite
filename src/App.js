import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage";
import Photography from './components/Photography';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="navigation">
        <Navbar></Navbar>
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/projects/photography" element={<Photography/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
