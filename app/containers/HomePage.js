import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions/home';
import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    home: state.home,
    session: state.session,
    settings: state.settings,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
