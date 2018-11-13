import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

const FavoriteCard = props => (
  <Card>
    <Card.Content>
      <Image src={props.photo.hdurl} />
      <Card.Header>{props.photo.title}</Card.Header>
      <Card.Meta>{props.photo.date}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button
          basic
          color="green"
          onClick={() => props.viewPhoto(props.photo)}
        >
          View Photo
        </Button>
        <Button
          basic
          color="red"
          onClick={() => props.removeFromFavorites(props.photo)}
        >
          Remove from Favorites
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default FavoriteCard;
