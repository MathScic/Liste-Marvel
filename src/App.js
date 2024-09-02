import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Marvel from "./components/Marvel";
import "./components/style.css";

const App = () => {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Marvel />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
