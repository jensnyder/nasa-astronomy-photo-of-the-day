import React, { Component } from "react";
import moment from "moment";
import momentRandom from "moment-random";

import Navbar from "./components/Navbar.js";
import PhotoContainer from "./components/PhotoContainer.js";
import FavoritesContainer from "./components/FavoritesContainer.js";
import { API_KEY } from "./keys.js";

class App extends Component {
  state = {
    photo: "",
    favorites: [],
    viewingFavorites: false,
    date: moment()
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  setPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  };

  addtoFavorites = photo => {
    this.setState({ favorites: [...this.state.favorites, photo] });
  };

  viewFavorites = () => {
    this.setState({ viewingFavorites: true });
  };

  viewPhoto = photo => {
    this.setState({
      viewingFavorites: false,
      photo: photo,
      date: moment(photo.date, "YYYY-MM-DD")
    });
  };

  removeFromFavorites = photo => {
    let newFavorites = this.state.favorites.filter(
      favorite => favorite !== photo
    );
    this.setState({ favorites: newFavorites });
  };

  formatDate = date => {
    if (date) {
      let month = date.month() + 1;
      let day = date.date();
      let year = date.year();
      return `${year}-${month}-${day}`;
    }
  };

  handleChange = date => {
    this.setState({ date: date, viewingFavorites: false });
    this.setPhoto(this.formatDate(date));
  };

  handleClick = () => {
    let randomDate = momentRandom(moment(), moment().year(2000));
    this.setState({ date: randomDate, viewingFavorites: false });
    this.setPhoto(this.formatDate(randomDate));
  };

  render() {
    return (
      <div>
        <Navbar
          viewFavorites={this.viewFavorites}
          viewingFavorites={this.state.viewingFavorites}
          setPhoto={this.setPhoto}
          photo={this.state.photo}
          date={this.state.date}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        {this.state.viewingFavorites ? (
          <FavoritesContainer
            favorites={this.state.favorites}
            viewPhoto={this.viewPhoto}
            removeFromFavorites={this.removeFromFavorites}
          />
        ) : (
          <PhotoContainer
            favorites={this.state.favorites}
            setPhoto={this.setPhoto}
            photo={this.state.photo}
            addtoFavorites={this.addtoFavorites}
            removeFromFavorites={this.removeFromFavorites}
          />
        )}
      </div>
    );
  }
}

export default App;
