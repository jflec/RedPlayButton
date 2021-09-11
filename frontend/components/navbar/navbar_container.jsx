import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mSTP, mDTP)(Navbar));
