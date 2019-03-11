import {connect} from 'react-redux';
import Form from './../components/Form';
import views from "../consts/views";

const mapDispatchToProps = (dispatch) => ({
  changeView: () => dispatch({
    type: "CHANGE_VIEW",
    payload: views.LIST,
  }),
});

export default connect(null, mapDispatchToProps)(Form);