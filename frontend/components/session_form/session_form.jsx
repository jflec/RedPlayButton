import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

class SessionForm extends React.Component {
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

                    <div className="signin-headings">
                        <h1>Sign in</h1>
                        <h2 className="form-h2">redplaybuttonlol</h2>
                    </div>
                        <div className="session-input">
                            <input
                                autoFocus
                                className="session-text"
                                type="text"
                                value={this.state.username}
                                placeholder=" "
                                onChange={this.update('username')}/>
                            <label
                                className="session-label">Username</label>
                        </div>

                        <div className="session-input">
                            <input
                                className="session-text"
                                type="password"
                                value={this.state.password}
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

export default SessionForm;