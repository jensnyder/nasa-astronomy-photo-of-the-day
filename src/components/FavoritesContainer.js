import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import FavoriteCard from "./FavoriteCard.js";

class FavoritesContainer extends Component {
  state = {
    sorted: false
  };

  render() {
    return (
      <Card.Group>
        {this.props.favorites.map(favorite => (
          <FavoriteCard
            key={favorite.date}
            photo={favorite}
            viewPhoto={this.props.viewPhoto}
            removeFromFavorites={this.props.removeFromFavorites}
          />
        ))}
      </Card.Group>
    );
  }
}

export default FavoritesContainer;
