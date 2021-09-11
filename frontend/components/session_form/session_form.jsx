import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  demo() {
    this.props.processForm({ username: 'demo', password: 'password' });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="errors">
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
            <p className="greeting-one">Sign in</p>
            <p className="greeting-two">to continue to RedPlayButton</p>
          </div>
          {this.renderErrors()}
          <div className="login-form">
            <li className="input-list">
              <ul>
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.update('username')}
                  className="login-input"
                />
              </ul>
              <ul>
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.update('password')}
                  className="login-input"
                />
              </ul>
            </li>
            <p className="demo-text">Don't feel like making an account?</p>
            <p className="demo-text-two">
              Try the <mark onClick={this.demo}>demo</mark> instead.
            </p>
            {this.props.navLink}
            <input className="session-submit" type="submit" value="Next" />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
