import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }
    render() {
        const { currentUser } = this.props;
        return (
            <div>
                {currentUser ? <Redirect to='/' /> : ""}
                <form onSubmit={this.handleSubmit}>
                    <input autoFocus type="text" value={this.state.username} onChange={this.update('username')}/>
                    <input type="password" value={this.state.password} onChange={this.update('password')} />
                    <button>{this.props.formType}</button>
                    <Route path="/login"/>
                </form>    
        </div>
        )
    }
}

export default SessionForm;