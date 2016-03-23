import React from 'react';

export default React.createClass({

  render() {
    var options = this.props.options.map(function(option, i){
      return( <li key={i}> {option} </li>)
    });
    return (
      <div className="dropdown">
        {this.props.name}
        <ul>{options}</ul>
      </div>
    );
  }
});
