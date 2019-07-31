// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
// import  { createStore } from 'react-redux';
import { connect } from 'react-redux';
import EntryMaker from '../components/EntryMaker.jsx';

// const store = createStore(reducer);




const mapStateToProps = (store) => {
  
}

const mapDispatchToProps = dispatch => ({

})

const HelloComponent = () => {
  return <h1>Hello World!</h1>;
}

class MainContainer extends Component {
  constructor(props) {
    super (props); 
  }

  render(){
    return(
      <div className = "innerBox">
        <h1 id="header">Journal Entry Maker</h1>  
        <EntryMaker newEntry={this.props.newEntry} handleKey={this.props.setNewEntry} handleClick={this.props.addNewEntry} />
      </div>
    );
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


