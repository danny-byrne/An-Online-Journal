// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
// import  { createStore } from 'react-redux';
import { connect } from 'react-redux';
import EntryMaker from '../components/EntryMaker.jsx';
import * as actions from '../actions/actions';
import EntriesDisplay from '../components/EntriesDisplay.jsx';
// const store = createStore(reducer);




const mapStateToProps = (store) => ({
  newEntry: store.main.newEntry,
})

const mapDispatchToProps = dispatch => ({
  setNewEntry: e => dispatch(actions.setNewEntry(e.target.value)),
  addNewEntry: e => dispatch(actions.addNewEntry())
})



class MainContainer extends Component {
  constructor(props) {
    super (props); 
  }

  render(){
    return(
      <div className = "innerBox">
        <h1 id="header">Journal Entry Maker</h1>  
        <EntryMaker newEntry={this.props.newEntry} handleKey={this.props.setNewEntry} handleClick={this.props.addNewEntry} />
        <EntriesDisplay />
      </div>
    );
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);


