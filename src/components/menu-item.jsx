import React, { Component } from "react";

import "./menu-item.scss";
class Menu extends Component {
  render() {
    const { name, image_url, image_size } = this.props.product;
    return (
      <div className="card">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${image_url})` }}
        />
          <div className="content">
            <h1>{name.toUpperCase()}</h1>
            <span>SHOP NOW</span>
          </div>
      </div>
    );
  }
}

export default Menu;
