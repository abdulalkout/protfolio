import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactMe from "./pages/ContactMe/ContactMe.tsx";
import AboutMe from "./pages/AboutMe/AboutMe.tsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/Experience" element={<p>Hi</p>} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
