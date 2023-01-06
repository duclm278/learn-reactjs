import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Report from "./Report";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <div className="navbar">
        <FaIcons.FaBars onClick={showSidebar} style={{ color: "white" }} />
      </div>
      <Router>
        <div className="content">
          <ul className={sidebar ? "menu active" : "menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/report" element={<Report />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
