import Navbar from "./Navbar";
import Home from "./Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import './styles.css';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
