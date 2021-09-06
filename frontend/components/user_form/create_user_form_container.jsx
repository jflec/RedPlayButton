import { connect } from 'react-redux';
import UserForm from './user_form';
import { createUser, login, clearErrors } from '../../actions/session_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,
        formType: 'Create account'
    }
}

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(createUser(user)),
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(UserForm);