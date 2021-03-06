import { connect } from 'react-redux';

import {
  addGroceryItem,
  startEditGroceryItem,
  stopEditGroceryItem,
  deleteGroceryItem,
  toggleCheckGroceryItem,
} from 'actions';
import App from 'components/App';

function mapStateToProps({ groceries }) {
  return { groceries };
}

function mapDispatchToProps(dispatch) {
  return {
    addGroceryItem: item => dispatch(addGroceryItem(item)),
    startEditGroceryItem: item => dispatch(startEditGroceryItem(item)),
    stopEditGroceryItem: item => dispatch(stopEditGroceryItem(item)),
    deleteGroceryItem: item => dispatch(deleteGroceryItem(item)),
    toggleCheckGroceryItem: item => dispatch(toggleCheckGroceryItem(item)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
