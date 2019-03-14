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
  changeView: () => dispatch({
    type: "CHANGE_VIEW",
    payload: views.EDIT,
  }),
  showItem: (id) => dispatch({
    type: "SHOW_ITEM",
    payload: id,
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(LibraryView);