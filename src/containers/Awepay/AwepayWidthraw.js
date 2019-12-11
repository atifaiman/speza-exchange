import React, { Component } from 'react';
import { render } from "react-dom";
import Modal from "react-responsive-modal";
import Form from './AwepayWidhrawForm';
import WireTransfer from './awepay.png';
import click from './pay_button.png';
import AwepayLogo from './Onlinebanking.svg';


class AwepayWidthraw extends Component {

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
                    <Form propOnSubmit={fields => this.propOnSubmit(fields)} userid={this.props.userid} currency={this.props.currency} balance={this.props.balance} email={this.props.email}/> 
                    </div>
                </Modal>
            </div>
    //     <Popup trigger={<button style={{background: 'transparent' , width: '80%' , height: '80px', padding: '0 30px', border: '1px solid rgba(108, 108, 108, 0.5)' , borderRadius: '7px' }} ><img style={{ float: 'left' , width: '35%' , height: '27px',  marginTop:'5px'}} src={WireTransfer} alt="wiretransfer-Logo"/><img style={{float: 'right', height: '35px' , margin: 'auto'}} src={click} alt="clock-Logo"/></button>} position="left center">
    //     {close => (
           
    //       <div>
    //           <Form propOnSubmit={fields => this.propOnSubmit(fields)} userid={this.props.userid} currency={this.props.currency} balance={this.props.balance}/> 
    //       </div>
      
    //     )}
    //   </Popup>

      );
    } 
  }

render(<AwepayWidthraw />, document.getElementById("awepay"));


export default AwepayWidthraw;