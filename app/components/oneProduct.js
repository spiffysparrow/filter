import React from 'react';

export default React.createClass({
  render() {
    return (
      <li className="product col-sm-6">
        <h4>{this.props.product.name}</h4>
        <div>Brand: {this.props.product.brandName}</div>
        <div className="price"> ${this.props.product.price} </div> 
        <img src={"" + this.props.product.mainImageUrl + ""}></img>
      </li>
    );
  }
});
