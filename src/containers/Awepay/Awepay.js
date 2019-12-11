import React, { Component } from 'react';
import { render } from "react-dom";
import AwepayLogo from './Onlinebanking.svg';
import click from './arrow.svg';
import DepositForm from './AwepayDeposite';
import Modal from "react-responsive-modal";

class Awepay extends Component {


    state = {
      fields: {},
      open: false,
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
        <div>
        <button onClick={this.onOpenModal} style={{background: '#1A1B22' , width: '65%' , height: '80px', padding: '0 30px', border: 'none', borderRadius: '7px' }} ><img style={{ float: 'left' , width: '50%' , height: '27px',  marginTop:'5px'}} src={AwepayLogo} alt="Awepay-Logo"/><img style={{float: 'right', height: '35px' , margin: 'auto'}} src={click} alt="clock-Logo"/></button>
        <Modal open={open} onClose={this.onCloseModal}>
              <div id="AwepayForm">
                  <DepositForm propOnSubmit={fields => this.propOnSubmit(fields)} userid={this.props.userid} currency={this.props.currency} email={this.props.email}/> 
              </div>
        </Modal>
      </div>
      );
    } 
  }

render(<Awepay />, document.getElementById("awepay"));

export default Awepay;