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
import React from 'react';
import { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';







class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <MainContainer />
      </div>
    )
  }
}

export default App;