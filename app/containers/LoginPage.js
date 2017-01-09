import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/app';
import Login from '../components/Login';

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
