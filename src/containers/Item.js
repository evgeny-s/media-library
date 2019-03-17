import {connect} from 'react-redux';
import Item from './../components/Item';
import views from "../consts/views";

const mapStateToProps = (state) => {
  const {list, selectedId} = state.books;

  let selectedItem;
  list.forEach((item) => {
    if (item.id === selectedId) {
      selectedItem = item;
    }
  });

  return {
    ...selectedItem
  };
};

const mapDispatchToProps = (dispatch) => ({
  onBackClick: () => dispatch({
    type: "CHANGE_VIEW",
    payload: views.LIST,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);