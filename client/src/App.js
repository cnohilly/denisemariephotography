import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Albums from "./pages/Albums";
import Album from "./pages/Album";
import Home from "./pages/Home";

function App() {




  return (
    <Router>
      <Header />
      <main>
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
        </Routes>
      </main>
    </Router>
  );
}

export default App;
