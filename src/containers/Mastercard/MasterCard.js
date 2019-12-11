import React, { Component } from 'react';
import { render } from "react-dom";
import EpayLogo from './epay.png';
import MasterTransfer from './MasterCardTransfer';
import click from './pay_button.png';
import Modal from "react-responsive-modal";


class MasterCardComponent extends Component {
  
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
      <div>
      <button onClick={this.onOpenModal} style={{background: '#fff' , width: '80%' , height: '80px', padding: '0 30px', border: '1px solid rgba(108, 108, 108, 0.5)', borderRadius: '7px' }} ><img style={{ float: 'left' , width: '35%' , height: '27px',  marginTop:'5px'}} src={EpayLogo} alt="Awepay-Logo"/><img style={{float: 'right', height: '35px' , margin: 'auto'}} src={click} alt="clock-Logo"/></button>
      <Modal open={open} onClose={this.onCloseModal}>
            <div id="epayForm">
                <MasterTransfer propOnSubmit={fields => this.propOnSubmit(fields)}/> 
            </div>
      </Modal>
    </div>
      );
    } 
  }

render(<MasterCardComponent/>, document.getElementById("awepay"));


export default MasterCardComponent;
