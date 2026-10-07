import React, { Component } from "react";
import Card from "./card";

export default class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div className="row g-4">
          {this.props.products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <Card
                title={product.title}
                price={product.price}
                imgUrl={product.imgUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}