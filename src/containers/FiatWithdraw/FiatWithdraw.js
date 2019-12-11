import React, { Component } from 'react';
import EpayW from './EpayW';
import WireTransfer from './WireTransfer';
import AwepayWidthraw from '../Awepay/AwepayWidthraw';

class FiatWithdraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: this.props.userid,
            currency: this.props.currency,
            balance: this.props.balance,
            email: this.props.email
          };
        
      }
      
    render() {
        return (
            <div style={{ textAlign:'center' , width:'100%'}}>
            {/* {(this.props.currency === 'usd') ? <EpayW userid={this.props.userid} currency={this.props.currency} balance={this.props.balance}/> : null } */}
            <br/>
            {((this.props.currency === 'myr') || (this.props.currency === 'krw') || (this.props.currency === 'vnd') || (this.props.currency === 'idr') || (this.props.currency === 'thb') || (this.props.currency === 'cny')) ? <AwepayWidthraw userid={this.props.userid} currency={this.props.currency} balance={this.props.balance} email={this.props.email}/> : null }
            {(this.props.currency === 'usd') ? <WireTransfer userid={this.props.userid} currency={this.props.currency} balance={this.props.balance}/> : null }
            {/* <div style={{textAlign:'center'}}><pre><h1>Transaction History</h1></pre></div>       */}
            </div>     
        );
    }
}

export default FiatWithdraw;
