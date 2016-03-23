import React from 'react';
import Option from './option';

export default React.createClass({
  getInitialState: function(){
    return ({isOpen: false, selected: "Navy"});
  },
  handleOptionClick: function(e){
    var newOption = e.target.innerHTML;
    this.setState({selected: newOption})
    this.props.updateFilter(newOption)
  },
  render() {
    var that = this;
    var options = this.props.options.map(function(option, i){
      var isSelected = (option === that.state.selected)
      return( <Option key={i} isSelected={isSelected} name={option} />)
    });
    return (
      <div className="dropdown">
        {this.props.name}
        <ul onClick={this.handleOptionClick}>
          {options}
        </ul>
      </div>
    );
  }
});
