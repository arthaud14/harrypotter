import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPerso from "./pages/AllPerso";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "tailwindcss/tailwind.css";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allperso" element={<AllPerso />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
