import React from 'react';
import OneProduct from './oneProduct';
import Dropdown from './dropdown';

export default React.createClass({
  render() {
    var productColors = {};
    var productList = Data.products.map(function(item, i){
      productColors[item.color] = true;
      return (<OneProduct key={i} product={item}/>)
    });
    productColors = Object.keys(productColors);
    return (
      <div>
        <Dropdown name="Colors" options={productColors}/>
        <ul className="ProductList">
          <h2>Products</h2>
          {productList}
        </ul>
      </div>
    );
  }
});
