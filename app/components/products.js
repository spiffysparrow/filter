import React from 'react';
import OneProduct from './oneProduct';
import Dropdown from './dropdown';

var PRICE_OPTIONS = ["Less than $50", "$50 to $100", "Over $100"];

var productColors = {}
Data.products.forEach(function(product){
  productColors[product.color] = true;
});
productColors = Object.keys(productColors);

var COLOR_OPTIONS = productColors;

export default React.createClass({
  getInitialState: function(){
    return ({priceFilter: null, colorFilter: null});
  },
  updateFilter: function(filter){
    if(filter["Prices"] !== undefined){
      this.setState({priceFilter: filter["Prices"]})
    }else{
      this.setState({colorFilter: filter["Colors"]})
    }
  },
  render() {
    var filteredProducts = filterProds(Data.products, this.state);
    var productList = filteredProducts.map(function(item, i){
      return (<OneProduct key={i} product={item}/>)
    });
    var numberResults;
    if(productList.length === 0){
      numberResults = "Sorry, no results found."
    }else{
      numberResults = productList.length + " results found"
    }
    return (
      <div>
        <div className="col-sm-2">
          <h5>Filter By</h5>
          <Dropdown name="Colors" options={COLOR_OPTIONS} updateFilter={this.updateFilter}/>
          <Dropdown name="Prices" options={PRICE_OPTIONS} updateFilter={this.updateFilter}/>
        </div>
        <ul className="ProductList col-sm-10">
          {numberResults}
          <div>
            {productList}
          </div>
        </ul>
      </div>
    );
  }
});

function filterProds(products, filters){
  var result = []
  products.forEach(function(product){
    if(!filters.colorFilter || filters.colorFilter === product.color){
      if(!filters.priceFilter || withinPrice(product.price, filters.priceFilter)){
        result.push(product)
      }
    }
  });
  return result;
}

function withinPrice(price, priceWords){
  if(priceWords === "Less than $50"){
    if(+price < 50){
      return true;
    }else{
      return false
    }
  }
  if(priceWords === "$50 to $100"){
    if(+price > 50 && +price < 100){
      return true;
    }else{
      return false
    }
  }
  if(priceWords === "Over $100"){
    if(+price > 100){
      return true;
    }else{
      return false
    }
  }
}
