import { Routes, Route } from "react-router-dom";

import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      hello react from vite
    </div>
  );
}

export default App;
