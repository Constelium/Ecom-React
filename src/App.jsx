import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import OurCanvases from "./Pages/OurCanvases/OurCanvases";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Cart from "./Pages/Cart/Cart.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurCanvases" element={<OurCanvases />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
