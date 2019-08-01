/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */



import * as types from '../constants/actionTypes';

export const setNewEntry = (value) => ({
  type: types.SET_NEW_ENTRY,
  payload: value
})

export const addNewEntry = () => ({
  type: types.ADD_NEW_ENTRY,
  payload: ''
})

export const setDate = (value) => ({
  type: types.SET_DATE,
  payload: value
})
