import {
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router >
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
