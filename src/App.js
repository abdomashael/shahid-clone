import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Movies from "./pages/movies/movies";
import Series from "./pages/series";

import Soon from "./components/comming_soon/soon";

import { connect } from "react-redux";
import { ADD_THUMBNAILS, ADD_TRENDS, ADD_GENRES } from "./redux/actions";

import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/footer/footer";

function App(props) {
  useEffect(() => {
    let fetchGenres = async () => {
      console.log("genre");

      let response = await axios.get(
        process.env.REACT_APP_API_URL + "/genre/movie/list"
      );
      // console.log(response.data.genres);
      // let trends = response.data.results;
      props.setGenres(response.data.genres);

    };

    fetchGenres();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movies">
            {/* <Soon/> */}
            <Movies />
          </Route>
          <Route path="/series">
            <Soon />

            {/* <Series /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setGenres: (genres) =>
      dispatch({ type: ADD_GENRES, payload: { genres: genres } }),
  };
};

export default connect(null, mapDispatchToProps)(App);
// export default App;
