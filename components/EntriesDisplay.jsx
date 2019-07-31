/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n MarketDisplay components
 *
 * ************************************
 */

import { connect } from 'react-redux';


 import React from 'react';
 import UniqueId from 'react-html-id';


 const mapStateToProps = (store) => ({
  entryList: store.main.entryList
 })


// constructor(){
//   super();
  
// }

const EntriesDisplay = (props) => {
const entryList = [];
for(let i = 0; i < props.entryList.length; i++){
  //pull object from entry list
  let obj = props.entryList[i];
  let entry = obj.entry;

  entryList.push(
    <div>
      <li key = {i}>
        {entry}
      </li>
    </div>
  )
}
return(
  <div className="displayBox">
    <h4>Entries</h4>
    {entryList}
  </div>
  );
};

 export default connect(mapStateToProps)(EntriesDisplay);