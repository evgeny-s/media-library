import {connect} from 'react-redux';
import Content from './../components/Content';

const mapStateToProps = (state) => ({
  view: state.common.view,
});

export default connect(mapStateToProps)(Content);