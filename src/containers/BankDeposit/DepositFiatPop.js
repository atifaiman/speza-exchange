import React, { Component } from 'react';
import { render } from "react-dom";
import DepositFiatForm from './DepositFiatForm';
import WireTransfer from './WireTransfer_2.png';
import click from './pay_button.png';
import Modal from "react-responsive-modal";

class DepositFiatPop extends Component {
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
      <button onClick={this.onOpenModal} style={{background: '#fff' , width: '80%' , height: '80px', padding: '0 30px', border: '1px solid rgba(108, 108, 108, 0.5)', borderRadius: '7px' }} ><img style={{ float: 'left' , width: '35%' , height: '27px',  marginTop:'5px'}} src={WireTransfer} alt="Awepay-Logo"/><img style={{float: 'right', height: '35px' , margin: 'auto'}} src={click} alt="clock-Logo"/></button>
      <Modal open={open} onClose={this.onCloseModal}>
        <div id="BankFiatForm">
        <img  style={{  width: '250px' ,display:'flex' , margin: 'auto', padding:'10px 0px'}} src={WireTransfer} alt="Logo"/>
          <div style={{ display: 'flex' , flexFlow: 'row'  , fontSize: '0.8em' , fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' , height: '480px' , backgroundColor: '#ffffff', width: '600px' , padding: '20px 20px'}} >
            <div style={{ display: 'flex' , flexFlow: 'column' , justifyContent: 'flex-start' , width: '50%' , color: '#000', fontSize:'11px', textAlign:'left' , margin:'auto'}}>         
              <h1>
                  Bank Information
              </h1>
              <h3>Bank Name : <span> DBS Bank (Hong Kong) Limited</span> </h3>
              <h3>Account number : <span> 4760511180</span></h3>
              <h3>Beneficiary name : <span> D-Avant Cap Holding Limited</span></h3>
              <h3>Bank Address : <span> Suites 908-9, Level 9, Landmark North, 39 Lung Sum Avenue, Sheun Shui, NT , Hong Kong</span></h3>
              <h3>Phone Number : <span> +60124188211</span></h3>
              <h3>Branch code : <span> 494</span> </h3>
              <h3>SWIFT code : <span> DHBKHKHH</span></h3>
          
          </div>
        <DepositFiatForm currency={this.props.currency}/>
        </div>
        </div>
      </Modal>
    </div>
      );
    } 
  }

render(<DepositFiatPop />, document.getElementById("awepay"));


export default DepositFiatPop;
