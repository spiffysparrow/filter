import React from 'react';

export default React.createClass({
  render() {
    return (
      <li className="Product">
        <div>Name: {this.props.product.name}</div>
        <div>Brand: {this.props.product.brandName}</div>
        <img src={"" + this.props.product.mainImageUrl + ""}></img>
      </li>
    );
  }
});
