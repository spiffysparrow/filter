import React from 'react';
import Option from './option';

export default React.createClass({
  getInitialState: function(){
    return ({isOpen: false, selected: null});
  },
  toggleOpen: function(){
    this.setState({isOpen: !this.state.isOpen})
  },
  handleOptionClick: function(e){
    var newOption = e.target.innerHTML;
    debugger
    if(!e.target.classList.contains("option")){
      newOption = null;
    }
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

    var open = this.state.isOpen ? "" : "closed";

    return (
      <div className={"dropdown " + open} onClick={this.toggleOpen}>
        <ul onClick={this.handleOptionClick}>
          <li className="optionTitle">Filter by {this.props.name}</li>
          {options}
        </ul>
      </div>
    );
  }
});
