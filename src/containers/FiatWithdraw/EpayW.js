import React, { Component } from 'react';
import { render } from "react-dom";
import EpayLogo from './epay.png';
import Withdraw from './EpayWithdraw';
import click from './pay_button.png';
import Modal from "react-responsive-modal";

class EpayW extends Component {
  state = {
    open: false,
    fields: {},
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  propOnSubmit = fields => {
      this.setState({fields});
     console.log("got: ", fields);
  };

    render() {
      const { open } = this.state;
      return (
        <div style={{ display: 'none'}}>
        <button onClick={this.onOpenModal} style={{ display: 'none' ,background: '#fff' , width: '80%' , height: '80px', padding: '0 30px', border: '1px solid rgba(108, 108, 108, 0.5)', borderRadius: '7px' ,display:'none' }} ><img style={{ float: 'left' , width: '35%' , height: '27px',  marginTop:'5px'}} src={EpayLogo} alt="Awepay-Logo"/><img style={{float: 'right', height: '35px' , margin: 'auto'}} src={click} alt="clock-Logo"/></button>
        <Modal open={open} onClose={this.onCloseModal}>
              <div id="epaywForm">
              <Withdraw propOnSubmit={fields => this.propOnSubmit(fields)} userid={this.props.userid} currency={this.props.currency} balance={this.props.balance}/> 
              </div>
        </Modal>
      </div>
      );
    } 
  }

// render(<EpayW />, document.getElementById("awepay"));



export default EpayW;