import React from 'react';
import {connect} from 'react-redux';

class Note extends React.Component{
  RemoveNote(){
    var {index, dispatch} = this.props;
    dispatch({type: 'DELETE_MANG', index});
  }
  render(){
    return(
        <div>
            <h2>{this.props.children}</h2>
            <button onClick={this.RemoveNote.bind(this)}>Remove</button>
        </div>
    );
  }
}

module.exports = connect()(Note);
