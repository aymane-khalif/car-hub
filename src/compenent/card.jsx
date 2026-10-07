import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={this.props.imgUrl}
          className="card-img-top"
          alt={this.props.title}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{this.props.title}</h5>

          <p className="card-text">
            {this.props.price} DH
          </p>

          <button className="btn btn-primary mt-auto">
            Ajouter au panier
          </button>
        </div>
      </div>
    );
  }
}