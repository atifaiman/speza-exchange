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

class MasterCardTransfer extends Component {
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
        M_currency: "",
        M_amount: "",
        M_card_number: "",
        M_card_expiry_month: "",
        M_card_expiry_year: "",
        M_card_security_code: "",
        M_first_name: "",
        M_last_name: "",
        M_email: "",
        M_user_ip: "",
        M_phone_number: "",
        M_country: "",
        M_city: "",
        M_address: "",
        M_zip: "",
    /*
    M_currency
    amount
    card_number
    card_expiry_month
    card_expiry_year
    card_security_code
    first_name
    last_name
    email
    user_ip
    phone_number
    country
    city
    address
    zip
    */
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
    var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}});
    findIP.then(ip => setIp(ip)).catch(e => console.error(e));
    //console.log(this.state);
    /*
    currency
    amount
    card_number
    card_expiry_month
    card_expiry_year
    card_security_code
    first_name
    last_name
    email
    user_ip
    phone_number
    country
    city
    address
    zip
    */
    const applogic = window.env.api.applogicUrl;
    const url = applogic.substring(0, applogic.length - 11) + 'v1/applogic/mastercard/deposit' ;
    e.preventDefault();
    if (formValid(this.state)) {
      fetch( url , {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Access-Control': 'Allow-Origin'
      },
      body:JSON.stringify({currency:this.state.M_currency,user_id:this.state.email,amount:this.state.M_amount,card_number:this.state.M_card_number,card_expiry_month:this.state.M_card_expiry_month,card_expiry_year:this.state.M_card_expiry_year,card_security_code:this.state.M_card_security_code,first_name:this.state.M_first_name,last_name:this.state.M_last_name,user_email:this.state.M_email,user_ip:this.state.M_user_ip,phone_number:this.state.M_phone_number,country:this.state.M_country,city:this.state.M_city,address:this.state.M_address,zip:this.state.M_zip})
    }
    ) 
    .then(res => res.json())
    .then(data => {
      console.log(data);
      //console.log(data.data);
      //window.location.href = data.data;
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

    if (true) {
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
            <div>
                    <a id="ip"></a>
            </div>
            <div>
                <label htmlFor="M_currency"  className="awepay_label" style={{color:'#000'}}>M_currency </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_currency"
                    type="string"
                    name="M_currency"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="M_amount"  className="awepay_label" style={{color:'#000'}}>M_amount </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_amount"
                    type="string"
                    name="M_amount"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="M_card_number"  className="awepay_label" style={{color:'#000'}}>M_card_number </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_card_number"
                    type="string"
                    name="M_card_number"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_card_expiry_month </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_card_expiry_month"
                    type="string"
                    name="M_card_expiry_month"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_card_expiry_year </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_card_expiry_year"
                    type="string"
                    name="M_card_expiry_year"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_card_security_code </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_card_security_code"
                    type="string"
                    name="M_card_security_code"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_first_name </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_first_name"
                    type="string"
                    name="M_first_name"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_last_name </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_last_name"
                    type="string"
                    name="M_last_name"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_email </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_email"
                    type="string"
                    name="M_email"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_user_ip</label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_user_ip"
                    type="string"
                    name="M_user_ip"
                    noValidate
                    onChange={this.handleChange}
                />
                 <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_phone_number </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_phone_number"
                    type="string"
                    name="M_phone_number"
                    noValidate
                    onChange={this.handleChange}
                />
                <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_country</label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_country"
                    type="string"
                    name="M_country"
                    noValidate
                    onChange={this.handleChange}
                />
                <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_city</label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_city"
                    type="string"
                    name="M_city"
                    noValidate
                    onChange={this.handleChange}
                />
                <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_address </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_address"
                    type="string"
                    name="M_address"
                    noValidate
                    onChange={this.handleChange}
                />
                <label htmlFor="amount"  className="awepay_label" style={{color:'#000'}}>M_zip </label>
                <input
                    //ref = { (el) => this._Amount = el  }
                    className="awepay_input"
                    placeholder="M_zip"
                    type="string"
                    name="M_zip"
                    noValidate
                    onChange={this.handleChange}
                />
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
    } 
    
  }

  toggleExternalHTML() {
    this.setState({showHtml: !this.state.showHtml});
  }
}


export default MasterCardTransfer;
