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



 const mapStateToProps = (store) => ({
  entryList: store.main.entryList
 })




const EntriesDisplay = (props) => {
const entryList = [];
for(let i = 0; i < props.entryList.length; i++){
  //pull object from entry list
  let obj = props.entryList[i];
  let entry = obj.entry;
  let date = obj.date;

  
  entryList.push(
    <div>
      <li key = {entry}>
        {date} : {entry}
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