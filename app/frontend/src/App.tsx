import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as needed
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Buy";
import Contact from "./pages/Contact";
import Cd from "./pages/Cd";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cd/:slug" element={<Cd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
