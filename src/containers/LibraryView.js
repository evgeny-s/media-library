import {connect} from 'react-redux';
import LibraryView from './../components/LibraryView';
import views from "../consts/views";

const mapStateToProps = (state) => ({
  items: state.books.list,
});
const mapDispatchToProps = (dispatch) => ({
  fetchList: () => dispatch({
    type: "FETCH_LIST",
  }),
  changeToEditView: () => dispatch({
    type: "CHANGE_VIEW",
    payload: views.EDIT,
  }),
  changeToShowView: () => dispatch({
    type: "CHANGE_VIEW",
    payload: views.SHOW,
  }),
  showItem: (id) => dispatch({
    type: "SHOW_ITEM",
    payload: id,
  }),
  editItem: (id) => dispatch({
    type: "EDIT_ITEM",
    payload: id,
  }),
  deleteItem: (id) => dispatch({
    type: "DELETE_ITEM",
    payload: id,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryView);