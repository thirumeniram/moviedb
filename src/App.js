import Home from "./Components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Actors from "./Components/Actors.js";
import Movies from "./Components/Movies.js";
import Movie_Information from "./Components/Movie Information.js";
import Profile from "./Components/Profile.js";
import { CssBaseline } from "@mui/material";
import NavBar from "./Components/NavBar.js";
import useStyles from "./Components/styles";
import './styles.css';

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className="root">
        <CssBaseline />
        <NavBar />
        <div className={classes.content}>
          <div className={classes.toolbar}>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route
                path="/movie_Information"
                element={<Movie_Information />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/actors" element={<Actors />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
