import React from 'react';
import Option from './option';

export default React.createClass({
  getInitialState: function(){
    return ({isOpen: false, selected: null});
  },
  handleOptionClick: function(e){
    var newOption = e.target.innerHTML;
    if(newOption === this.props.name){
      newOption = null;
    }
    console.log(newOption);
    this.setState({selected: newOption});
    var filter = {}
    filter[this.props.name] = newOption
    this.props.updateFilter(filter)
  },
  render() {
    var that = this;
    var options = this.props.options.map(function(option, i){
      var isSelected = (option === that.state.selected)
      return( <Option key={i} isSelected={isSelected} name={option} />)
    });
    return (
      <div className="dropdown">
        <ul onClick={this.handleOptionClick}>
          <li>{this.props.name}</li>
          {options}
        </ul>
      </div>
    );
  }
});
