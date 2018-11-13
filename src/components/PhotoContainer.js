import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Photo from "./Photo.js";

class PhotoContainer extends Component {
  render() {
    return (
      <Container>
        <Photo
          photo={this.props.photo}
          addtoFavorites={this.props.addtoFavorites}
          favorites={this.props.favorites}
          removeFromFavorites={this.props.removeFromFavorites}
        />
      </Container>
    );
  }
}

export default PhotoContainer;
