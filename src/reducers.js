import Immutable from 'immutable';
import { combineReducers } from 'redux';
import {
  ADD_GROCERY_ITEM,
  START_EDIT_GROCERY_ITEM,
  STOP_EDIT_GROCERY_ITEM,
  DELETE_GROCERY_ITEM,
  TOGGLE_CHECK_GROCERY_ITEM,
} from './actions';

const initialState = new Immutable.List([
  { checked: false, name: 'Apples', id: '1', editMode: false },
  { checked: false, name: 'Bananas', id: '2', editMode: false },
]);

export function groceries(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM: {
      return new Immutable.List([...state, action.item]);
    }
    case START_EDIT_GROCERY_ITEM: {
      const newState = state.map(item =>
        item.id === action.itemID ? { ...item, editMode: true } : item,
      );
      return newState;
    }
    case STOP_EDIT_GROCERY_ITEM: {
      const newState = state.map(item =>
        item.id === action.item.id ? { ...action.item, editMode: false } : item,
      );
      return newState;
    }
    case DELETE_GROCERY_ITEM: {
      const newState = state.filter(item => item.id !== action.itemID);
      return newState;
    }
    case TOGGLE_CHECK_GROCERY_ITEM: {
      const newState = state.map(item =>
        item.id === action.itemID ? { ...item, checked: !item.checked } : item,
      );
      return newState;
    }
    default:
      return state;
  }
}

export default combineReducers({
  groceries,
});
