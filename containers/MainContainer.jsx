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
        <HelloComponent />,
        <EntryMaker newEntry={this.props.newEntry} handleKey={this.props.setNewEntry} handleClick={this.props.addNewEntry} />
      </div>
    );
  }
}

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

//old shit that worked  vvvv
