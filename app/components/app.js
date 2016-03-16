import React from 'react';
import Products from './products';

export default React.createClass({
  render() {
    return (
      <div className="App">
        <h1>Huckberry</h1>
        <Products />
      </div>
    );
  }
});
