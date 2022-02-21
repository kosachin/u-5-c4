import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SearchInp } from "./Components/Search";
import { Display } from "./Components/Displya";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchInp />} />
        {/*<Route path="/new" element={<Display />} />*/}
      </Routes>
      <Display />
    </div>
  );
}

export default App;
