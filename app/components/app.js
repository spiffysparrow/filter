import React from 'react';
import Products from './products';

export default React.createClass({
  render() {
    return (
      <div className="App">
        <h1>Meddlesome Fox</h1>
        <Products />
      </div>
    );
  }
});
