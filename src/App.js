import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<p>Hi</p>} />
        <Route path="/projects" element={<p>Hi</p>} />
        <Route path="/contact" element={<p>Hi</p>} />
      </Routes>
    </>
  );
}

export default App;
