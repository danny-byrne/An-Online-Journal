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
  userPosts: [
    {
      user: "",
      posts: 
        {
          date: "",
          content: ""   
        }
    }
  ]
};


const mainReducer = (state = initialState, action) => {
    let entryList;

    switch (action.type) {
      case types.SET_ENTRY: {

      }

      case types.ADD_ENTRY: {

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