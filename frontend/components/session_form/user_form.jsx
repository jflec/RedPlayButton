import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="errors-s">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
        {$('login-input').addClass('error')}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <li className="bingle">
            <ul className="blue">B</ul>
            <ul className="red">i</ul>
            <ul className="orange">n</ul>
            <ul className="blue">g</ul>
            <ul className="green">l</ul>
            <ul className="red">e</ul>
          </li>
          <div className="greeting">
            <p className="greeting-one">Sign up</p>
            <p className="greeting-two">to continue to RedPlayButton</p>
          </div>
          {this.renderErrors()}
          <div className="login-form">
            <li className="input-list">
              <ul>
                <input
                  type="text"
                  value={this.state.email}
                  placeholder="Email"
                  onfocus="this.placeholder = ''"
                  onChange={this.update('email')}
                  className="login-input"
                />
              </ul>
              <ul>
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onfocus="this.placeholder = ''"
                  onChange={this.update('username')}
                  className="login-input"
                />
              </ul>
              <ul>
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onfocus="this.placeholder = ''"
                  onChange={this.update('password')}
                  className="login-input"
                />
              </ul>
            </li>
            <p className="demo-text-s">Don't feel like making an account?</p>
            <p className="demo-text-two-s">
              Try the <mark>demo</mark> instead.
            </p>
            {this.props.navLink}
            <input className="session-submit-s" type="submit" value="Next" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
