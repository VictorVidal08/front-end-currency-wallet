import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUserEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handleButton = () => {
    // console.log(this.props);
    const { history, setUserEmail } = this.props;
    const { email } = this.state;
    setUserEmail(email);
    history.push('/carteira');
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const { email, password } = this.state;
      const passwordTest = 6;
      const emailTest = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      this.setState({
        isDisabled: !(emailTest.test(email) && password.length >= passwordTest),
      });
    });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div className="main-div">
        <div className="div-container">
          <form className="formClass">
            <h2 className="loginTitle">Login</h2>
            <label htmlFor="email" className="labelClass">
              Insira seu Email:
              <input
                className="inputClass"
                type="email"
                name="email"
                data-testid="email-input"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>
            <label htmlFor="password" className="labelClass">
              Insira sua senha:
              <input
                className="inputClass"
                type="password"
                name="password"
                data-testid="password-input"
                onChange={ this.handleChange }
                value={ password }
              />
            </label>
            <button
              type="button"
              onClick={ this.handleButton }
              disabled={ isDisabled }
            >
              Entrar
            </button>
          </form>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (email) => dispatch(saveUserEmail(email)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  setUserEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
