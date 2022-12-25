import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Albums from "./pages/Albums";
import Album from "./pages/Album";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {




  return (
    <Router>
      <div className="bg-dark text-white d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 position-relative d-flex flex-column">
          <Routes>
            <Route path="/"
              element={<Home />}
            />
            <Route path="/albums">
              <Route
                path=""
                element={<Albums />}
              />
              <Route
                path=":id"
                element={<Album />}
              />
            </Route>
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
