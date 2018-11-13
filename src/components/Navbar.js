import React, { Component } from "react";
import { Menu, Header, Button } from "semantic-ui-react";
import moment from "moment";

import DateInput from "./DateInput.js";

export default class Navbar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <Header
            as="h1"
            block
            onClick={() => this.props.handleChange(moment())}
          >
            NASA Astronomy Photo of the Day
          </Header>
        </Menu.Item>
        <Menu.Item>
          <DateInput
            photo={this.props.photo}
            setPhoto={this.props.setPhoto}
            date={this.props.date}
            handleClick={this.props.handleClick}
            handleChange={this.props.handleChange}
          />
        </Menu.Item>
        <Menu.Item>
          {this.props.viewingFavorites ? (
            <Button>Sort Favorites by Date</Button>
          ) : (
            <Button onClick={this.props.viewFavorites}>View Favorites</Button>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

//add state to photo, keep track of when it was added
