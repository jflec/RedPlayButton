import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import UserForm from './user_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: (
      <Link to="/login" className="login-button">
        <mark>Have an account?</mark> Sign in
      </Link>
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);