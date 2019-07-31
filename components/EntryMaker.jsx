/**
 * ************************************
 *
 * @module  EntryMaker
 * @author
 * @date
 * @description a text box and a few buttons for creating journal entries
 *
 * ************************************
 */

 import React from 'react';

 const EntryMaker = props => (
    <div class="entryBox">
      <div id='entryMaker'>
        <input type='text' value={props.newEntry} onChange={(e)=>props.handleKey(e)} /> <button onClick={props.handleClick}> Add Entry </button>
      </div>
    </div>
 );

 export default EntryMaker;