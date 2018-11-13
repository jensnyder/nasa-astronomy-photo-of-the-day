import React from "react";
import { Segment, Image, Header, Icon, Menu } from "semantic-ui-react";

const Photo = props => (
  <React.Fragment>
    <Segment.Group horizontal>
      <Segment compact>
        <Header as="h2" textAlign="center">
          {props.photo.title}
          {props.favorites.includes(props.photo) ? (
            <Icon
              name="star"
              color="yellow"
              // floated="right"
              onClick={() => props.removeFromFavorites(props.photo)}
            />
          ) : (
            <Icon
              name="star outline"
              color="grey"
              // floated="right"
              onClick={() => props.addtoFavorites(props.photo)}
            />
          )}
        </Header>
      </Segment>
    </Segment.Group>
    <Segment>
      <Image alt={props.photo.title} src={props.photo.hdurl} centered />
    </Segment>
    <Segment secondary>{props.photo.explanation}</Segment>
  </React.Fragment>
);

export default Photo;
