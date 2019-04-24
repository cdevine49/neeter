import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmation: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {fullName, email, password} = this.state;
    this.props.process({fullName, email, password});
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.onChange('fullName')}
              />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.onChange('email')}
              />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.onChange('password')}
              />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={this.state.confirmation}
              onChange={this.onChange('confirmation')}
              />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);