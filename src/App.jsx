import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import World from "./pages/World.jsx";
import Business from "./pages/Business.jsx";
import Opinion from "./pages/Opinion.jsx";
import Tech from "./pages/Tech.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/world" element={<World />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/opinion" element={<Opinion />} />
        <Route exact path="/tech" element={<Tech />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;