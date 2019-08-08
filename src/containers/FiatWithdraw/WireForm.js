import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import Modal from "react-responsive-modal";
import money from './money.png';
import WireTransferLogo from './WireTransfer_2.png';
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class WireWithraw extends Component {
  constructor(props) {
    super(props);

    this.state = {
        userid: this.props.userid,
        amount: null,
        currency: this.props.currency,
        balance: this.props.balance,
        fullName: 'a',
        bankAcc: 'a',
        swift: 'a',
        bankName: 'a',
        branch: 'a',
        bankBranch: 'a',
        bankAddress: 'a',
        country: 'a',
        city: 'a',
      formErrors: {
        amount: "",
      }
    };
  }

  handleSubmit = e => {
    const applogic = window.env.api.applogicUrl;
    const url = applogic.substring(0, applogic.length - 11 ) + 'v1/applogic/wire_transfer/withdraw' ;
    e.preventDefault();
    if (formValid(this.state)) {
    fetch(url , {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Access-Control': 'Allow-Origin'
      },
      body:JSON.stringify({amount:this.state.amount,currency:'USD',full_name:this.state.fullName,bank_acc:this.state.bankAcc,SWIFT:this.state.swift,bank_name:this.state.bankName,bank_branch:this.state.branch,bank_address:this.state.bankAddress,country:this.state.country,city:this.state.city })
    }
    ) 
    .then(res => res.json())
    .then(data => {
      
      console.log(data)
      window.location.reload();

    })
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "amount":
        formErrors.amount =
          value > (this.state.balance -20) ? "Minimum balance required is : 20$ " : "";
        break;
      default:
        break;
    }

     this.setState({ formErrors, [name]: value });
      
  };

  render() {
    if (this.state.currency === "usd") {
    // if (true) {

      const { formErrors } = this.state;

    return (
      
        <div style={{ backgroundColor: '#ffffff',  borderRadius: '10px' , width: '500px' , display: 'flex' , flexDirection: 'column' }}>
          <h1 className="awepay_depsit_head">Wire Withdraw</h1>
          <img  style={{  width: '250px' ,display:'flex' , margin: 'auto' , padding:'10px 0px'}} src={WireTransferLogo} alt="Logo"/>
          <form onSubmit={this.handleSubmit} noValidate>
          <div style={{display:'flex' , flexDirection:'row'}}>
          <div style={{display:'flex' , flexDirection:'column' , padding:'0 10px'}}>
            <div style={{ display: 'flex' ,flexDirection: 'column' , width: '100%', padding:'5px' }}>
              <label htmlFor="fullName" className="awepay_label">Full name</label>
              <input
                className="awepay_input"
                placeholder="Full name"
                type="text"
                name="fullName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , width: '100%' , padding:'5px' }}>
              <label className="awepay_label" htmlFor="bankAcc">Bank acount</label>
              <input
                className="awepay_input"
                placeholder="account"
                type="text"
                name="bankAcc"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , width: '100%' , padding:'5px' }}>
              <label className="awepay_label" htmlFor="swift">SWIFT</label>
              <input
                className="awepay_input"
                placeholder="SWIFT"
                type="text"
                name="swift"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , width: '100%'  , padding:'5px'}}>
              <label htmlFor="bankName" className="awepay_label">Bank Name</label>
              <input
                className="awepay_input"
                placeholder="Bank name"
                type="text"
                name="bankName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' ,  width: '100%' , padding:'5px' }}>
              <label className="awepay_label" htmlFor="branch">Branch Name</label>
              <input
                className="awepay_input"
                placeholder="Branch"
                type="text"
                name="branch"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            </div>
            <div style={{display:'flex' , flexDirection:'column' , padding:'0 10px'}}>
            <div style={{ display: 'flex' ,flexDirection: 'column' , width: '100%', padding:'5px'  }}>
              <label className="awepay_label" htmlFor="bankAddress">Bank Address</label>
              <input
                className="awepay_input"
                placeholder="Band Address"
                type="text"
                name="bankAddress"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , width: '100%' , padding:'5px' }}>
              <label className="awepay_label" htmlFor="country">Country</label>
              <input
                className="awepay_input"
                placeholder="Country"
                type="text"
                name="country"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , width: '100%' , padding:'5px' }}>
              <label className="awepay_label" htmlFor="city">City</label>
              <input
                className="awepay_input"
                placeholder="City"
                type="text"
                name="city"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' ,  width: '100%', padding:'5px'  }}>
              <label className="awepay_label" htmlFor="amount">Amount </label>
              <input
                className="awepay_input"
                placeholder="amount"
                type="number"
                name="amount"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.amount.length > 0 && (
                <div className="awepay_error">{formErrors.amount}</div>
              )}
            </div>
            </div>
            </div>
            <div style={{ width: '100%' , display: 'flex' , flexDirection: 'row' , alignItems: 'center'}}>
              <button type="submit" 
                disabled={(this.state.formErrors.amount) ||  (!this.state.amount) ||  (!this.state.fullName) ||  (!this.state.bankAcc) || (!this.state.swift) || (!this.state.bankName) || (!this.state.branch) || (!this.state.bankBranch) ||   (!this.state.bankAddress) || (!this.state.country) || (!this.state.city) }
                className="epay-button" style={{
                  width: '100%',
                  background: 'var(--button-disabled) !important',
                  borderRadius: 'calc(var(--gap) * 0.5)',
                  fontSize: 'calc(var(--gap) * 2.66)',
                  marginTop: 'calc(var(--gap) * 1.55)',
                  height: 'calc(var(--gap) * 6.5)',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  border: 'none',
                  padding: 'var(--gap)',
                  margin: 'var(--gap)',
                }} > Send Request </button>
            
            </div>
          </form>
        </div>   
    );
    } else {

      return (
        <div className="awepay_depsit_confirmation ">
        <img  style={{  width: '220px' ,display:'flex' , margin: '50px auto'}} src={money} alt="Logo"/>
        <p style={{ textAlign: 'center' , width:'100%' , color: '#242253' , fontWeight:'300' , fontSize:'20px' , lineHeight:'0px' }}> the Only Supported currency is </p>
        <p style={{ textAlign: 'center' , width:'100%' , color: '#242253' , fontWeight:'bold' , fontSize:'24px' , lineHeight:'0px' }}> USD </p>
        </div>
      );

    }
    
  }
}


export default WireWithraw;

/* 
amount=0.1
currency=usd 
full_name="Christopher Lee" 
bank_acc=0303032828 
SWIFT=MYBB0632 
bank_name=MayBank 
bank_branch=Selangor 
bank_address=123123123123123123123123asdadffgwerdcsdfsf 
country=Malaysia 
city=Klang
amount=0.1 currency=usd full_name="Christopher Lee" bank_acc=0303032828 SWIFT=MYBB0632 bank_name=MayBank bank_branch=Selangor bank_address=123123123123123123123123asdadffgwerdcsdfsf country=Malaysia city=Klang
*/  