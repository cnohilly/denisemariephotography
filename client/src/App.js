import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Grid, ThemeProvider, createTheme } from '@mui/material';
import Header from "./components/Header";
import Footer from "./components/Footer";

import Albums from "./pages/Albums";
import Album from "./pages/Album";
import Home from "./pages/Home";
import About from "./pages/About";
import { LoaderProvider } from './components/Loader/LoaderContext';


const App = () => {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <LoaderProvider>
        <Router>
          <Grid container minHeight={'100vh'} display={"flex"} flexDirection={"column"}>
            <Grid item>
              <Header />
            </Grid>
            <Grid item sx={{ flexGrow: 1, display: 'flex' }}>
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
            </Grid>
            <Grid item>
              <Footer />
            </Grid>
          </Grid>
        </Router>
      </LoaderProvider>
    </ThemeProvider>
  );
}

export default App;
