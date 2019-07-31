/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';


const HelloComponent = () => {
  return <h1>Hello World!</h1>;
}




class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <MainContainer />
        <HelloComponent />
      </div>
    )
  }
}

export default App;