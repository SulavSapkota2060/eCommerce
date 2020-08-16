import React, { Component } from "react";

import Menu from '../components/menu-item'
import './directory.styles.scss'

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      menuItems: [
        {
          name: "Hat",
          image_url:"https://i.ibb.co/JHWRj9K/pexels-zack-jarosz-1687719.jpg",
          image_size:"large",
          id:1,
        },
        {
            name: "Hoodie",
            image_url:"https://i.ibb.co/wKbKyjj/pexels-elijah-o-donnell-3707182.jpg",
            image_size:"large",
            id:2,
          },
          {
            name: "Female",
            image_url:"https://i.ibb.co/dWQP0b1/pexels-godisable-jacob-963696.jpg",
            image_size:"large",
            id:3,
          },
          {
            name: "Sneakers",
            image_url:"https://i.ibb.co/xX9m2rW/pexels-hoang-loc-2421374.jpg",
            image_size:"large",
            id:4,
          },
      ],
    };
  }
  render() {
    return (<div className="menuItems">
        {
            this.state.menuItems.map(product => (
                <Menu key={product.id} product = {product} />
            ))
        }
    </div>);
  }
}

export default Directory;
