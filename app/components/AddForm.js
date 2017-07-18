import React from 'react';
import {connect} from 'react-redux';

class AddForm extends React.Component{
  handleOnSubmit(e){
    var {dispatch} = this.props;
    dispatch({type: 'ADD_MANG', item: this.refs.text.value});
    dispatch({type: 'TOGGLE_IS_ADDING'});
    e.preventDefault();
  }
  toggle(){
    var {dispatch} = this.props;
    dispatch({type: 'TOGGLE_IS_ADDING'});
  }
  render(){
        if(this.props.isAdding) return(
          <div>
          <input name="add" ref="text" />
          <button onClick={this.handleOnSubmit.bind(this)} >Add</button>
          </div>
        );
       return (<button onClick={this.toggle.bind(this)} >+</button>);
  }
}

module.exports = connect(function(state){
  return {isAdding: state.isAdding}
}

)(AddForm);
