import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }
    render() {
        const { currentUser, errors } = this.props;
        return <div className="background">
            {currentUser ? <Redirect to='/' /> : ""}
      
                <form onSubmit={this.handleSubmit}>
                        <h1>Sign up</h1>
                        <h2>to continue to RedPlayButton</h2>
                    <div className="session-input">
                            <input
                                autoFocus
                                className="session-text"
                                type="text"
                                placeholder=" "
                                onChange={this.update('email')} />
                            <label
                                className="session-label">Email</label>
                        </div>
                        <div className="session-input">
                            <input
                                
                                className="session-text"
                                type="text"
                                placeholder=" "
                                onChange={this.update('username')}/>
                            <label
                                className="session-label">Username</label>
                        </div>

                        <div className="session-input">
                            <input
                                className="session-text"
                                type="password"
                                placeholder=" "
                                onChange={this.update('password')} />
                            <label
                                className="session-label">Password</label>
                        </div>

                        <div className="form-btns">
                            <button className="form-submit">{this.props.formType}</button>
                            <Route path="/login"/>
                        </div>
                </form>
        </div>
    }
}

export default UserForm;