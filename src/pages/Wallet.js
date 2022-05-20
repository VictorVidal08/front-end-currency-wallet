import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Header from './Header';
import Form from './Form';
import Table from './Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  setCurrencies: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
