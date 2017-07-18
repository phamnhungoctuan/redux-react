import React from 'react';
import Note from './Note';
import AddForm from './AddForm';
import {connect} from 'react-redux';

class List extends React.Component{
  render(){
    return(
      <div>
            <AddForm />
            {this.props.mang.map((i, e) =>
                <Note key={e} index={e}>{i}</Note>)
            }
      </div>
    );
  }
}

module.exports = connect(function(state){
    return {mang: state.mang}
}) (List);
