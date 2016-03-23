import React from 'react';
import OneProduct from './oneProduct';

export default React.createClass({
  render() {
    var productList = Data.products.map(function(item, i){
      return (<OneProduct key={i}/>)
    });
    return (
      <div className="Products">
        <h2>Products</h2>
        {productList}
      </div>
    );
  }
});
