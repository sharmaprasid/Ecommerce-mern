import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
