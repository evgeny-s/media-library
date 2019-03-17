import {connect} from 'react-redux';
import Form from './../components/Form';
import views from "../consts/views";

const mapStateToProps = (state) => ({
  newTitle: state.books.newTitle,
  newDescription: state.books.newDescription,
  newAuthor: state.books.newAuthor,
  newImage: state.books.newImage,
  newPages: state.books.newPages,
  newPrice: state.books.newPrice,
  editItemId: state.books.editItemId,
});

const mapDispatchToProps = (dispatch) => ({
  onBackClick: () => dispatch({
    type: "CHANGE_VIEW",
    payload: views.LIST,
  }),
  onInputChanged: (inputName, event) => dispatch({
    type: "ON_INPUT_CHANGED",
    payload: {
      inputName,
      inputValue: event.target.value,
    }
  }),
  submitForm: () => dispatch({
    type: "SUBMIT_FORM",
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);