import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TrainingActions from '../actions/training';
import Training from '../components/Training';

function mapStateToProps(state) {
  return {
    app: state.app,
    session: state.session,
    training: state.training,
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TrainingActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Training);
