import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/UIKits/Nav";

function App() {
  return (
    <Router>
      <div className="bg-[#010623] h-[440px] mb-[140px]">
        <Nav />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
