import { connect } from 'react-redux';
import ChannelIcon from './channel_icon';

const mSTP = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id],
  };
};

const mDTP = () => {
  return {};
};

export default connect(mSTP, mDTP)(ChannelIcon);
