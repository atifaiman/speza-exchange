import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Modal from "react-responsive-modal";
import { render } from "react-dom";
import money from './money.png';
import EpayLogo from './epay.png';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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

class EpayDeposite extends Component {
  constructor(props) {
    super(props);
    this.state = {
        close: false,
        email: null,
        amount: null,
        userid: this.props.userid,
        showHtml: false,
        currency: this.props.currency,
        html: "j",
      formErrors: {
        email: "",
        amount: "",
      }
    };
    this.toggleExternalHTML = this.toggleExternalHTML.bind(this)
  }

  onOpenModal = () => {
    this.setState({ close: true });
  };

  onCloseModal = () => {
    this.setState({ close: false });
  };

  handleSubmit = e => {
    const applogic = window.env.api.applogicUrl;
    const url = applogic.substring(0, applogic.length - 11) + 'v1/applogic/epay/deposit' ;
    e.preventDefault();
    if (formValid(this.state)) {
      fetch( url , {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Access-Control': 'Allow-Origin'
      },
      body:JSON.stringify({user_sn:this.state.userid,user_email:this.state.email,amount:this.state.amount,currency:'USD'})
    }
    ) 
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.data);
      window.location.href = data.data;
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
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "amount":
        formErrors.amount =
          value < 0.1 ? "minimum amount not reached" : "";
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
      
      <div style={{ backgroundColor: '#ffffff',  borderRadius: '10px' , width: '500px' , display: 'flex' , flexDirection: 'column'  }}>
          <h1 className="awepay_depsit_head">Deposit</h1>
          <img  style={{  width: '150px' ,display:'flex' ,  padding:'30px' , margin: 'auto'}} src={EpayLogo} alt="epay-Logo"/>
          <form onSubmit={this.handleSubmit} noValidate>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="email"  className="awepay_label">Email</label>
              <input
                ref = { (el) => this._email = el  }
                className="awepay_input"
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                 <div className="awepay_error">{formErrors.email}</div>
              )}
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="amount"  className="awepay_label">Amount </label>
              <input
                ref = { (el) => this._Amount = el  }
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
            <div style={{ width: '100%' , display: 'flex' , flexDirection: 'column' , alignItems: 'center'}}>
              <button type="submit" 
               className="epay-button"
               disabled={(this.state.formErrors.amount) || (this.state.formErrors.email) || (!this.state.email) || (!this.state.amount) }
               style={{
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
              }} >Go to Epay </button>
            </div>
          </form>
          <div>
                {this.state.showHtml && 
                 <iframe 
                 src={this.state.html}
                 frameBorder="0"
                 style={{maxWidth:1200, width:'100%', overflow:'visible'}}
                 />
                }
        </div>
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

  toggleExternalHTML() {
    this.setState({showHtml: !this.state.showHtml});
  }
}


export default EpayDeposite;
