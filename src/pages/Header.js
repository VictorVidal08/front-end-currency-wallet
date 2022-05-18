import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        Header
        <h2
          data-testid="email-field"
        >
          Email:
          { userEmail }
        </h2>
        <h2
          data-testid="total-field"
        >
          Despesa Total: 0
        </h2>
        <h2
          data-testid="header-currency-field"
        >
          BRL
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => ({
  userEmail: globalState.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
