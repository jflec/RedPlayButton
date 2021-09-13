import { connect } from 'react-redux';
import UserIcon from './user_icon';
import { logout } from '../../actions/session_actions';

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

export default connect(mSTP, mDTP)(UserIcon);
