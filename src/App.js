import React, { Component } from "react";

import Cards from "./compenent/cards";
export default class App extends Component {
  state = {
  products: [
    {
      id: 1,
      idCategory: 1,
      title: "Toyota Supra",
      price: 45000,
      imgUrl: "/image/supra1.jpg",
    },
    {
      id: 2,
      idCategory: 1,
      title: "Nissan Skyline",
      price: 40000,
      imgUrl: "/image/skyline1.jpg",
    },
    {
      id: 3,
      idCategory: 1,
      title: "Mazda RX-7",
      price: 35000,
      imgUrl: "/image/Mazda1.jpg",
    },
    {
      id: 4,
      idCategory: 1,
      title: "Honda NSX",
      price: 50000,
      imgUrl: "/image/honda1.jpg",
    },
  ],
};

  render() {
    return (
      <>
        <Cards 
        products={this.state.products}
        />
      </>
    );
  }
}