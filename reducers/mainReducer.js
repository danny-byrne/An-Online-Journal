/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */



import * as types from '../constants/actionTypes';

const initialState = {
  totalEntries: 0,
  totalUsers: 0,
  entryList: []
};


const mainReducer = (state = initialState, action) => {
    let entryList;

    switch (action.type) {

      case types.SET_NEW_ENTRY: {
        return {
          ...state,
          newEntry: action.payload
        }

      }

      case types.ADD_NEW_ENTRY: {
        const newJournalEntry = {
          entry: state.newEntry,
        }
        entryList = state.entryList.slice();
        entryList.push(newJournalEntry);

        return {
          ...state,
          entryList,
        }
      }

      case types.DELETE_ENTRY: {

      }

      case types.EDIT_ENTRY: {

      }

      default:
        return state;
      
    };

}

export default mainReducer;