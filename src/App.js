import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Forgot from "./pages/Login/Forgot";

import "./App.scss";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login reg={true} />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
