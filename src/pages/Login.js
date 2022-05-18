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
      // validação com apoio do Takahashi
    });
  }
  // ref regex: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        Login
        <form>
          <label htmlFor="email">
            Insira seu Email:
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="password">
            Insira sua senha:
            <input
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
      </div>);
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
