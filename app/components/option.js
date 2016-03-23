import React from 'react';

export default React.createClass({
  render() {
    return (
      <li className={"option " + (this.props.isSelected ? "selected" : "")}>
        {this.props.name}
      </li>
    );
  }
});
