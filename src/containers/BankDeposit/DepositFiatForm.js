import React, { Component } from "react";


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

class DepositeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bankName: null,
        bankAcc: null,
        fullName: null,
        receipt: null,
        amount: null,
        showHtml: false,
        currency: this.props.currency,
      formErrors: {
        email: "",
        amount: "",
      }
    };
    this.toggleExternalHTML = this.toggleExternalHTML.bind(this)
  }

  handleSubmit = e => {
    console.log(this.state.currency);
    const applogic = window.env.api.applogicUrl;
    const url = applogic.substring(0, applogic.length - 11) + 'v1/applogic/wire_transfer/deposit' ;
    e.preventDefault();
    if (formValid(this.state)) {
      fetch( url , {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Access-Control': 'Allow-Origin'
      },
      body:JSON.stringify({rid:this.state.receipt,amount:this.state.amount,currency:'USD'})
    }
    ) 
    .then(res => res.json())
    .then(data => {
      console.log(data);
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
      
      <div style={{ backgroundColor: '#ffffff',  borderRadius: '10px' , display: 'flex' , flexDirection: 'column' , padding: '25px 16px', width: '50%' , height: '100%' }}>
          <form onSubmit={this.handleSubmit} noValidate>
          <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="bankName"  className="awepay_label">Bank Name</label>
              <input
                ref = { (el) => this._receipt = el  }
                className="awepay_input"
                placeholder="Bank Name"
                type="text"
                name="bankName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="bankAcc" className="awepay_label">Bank Account</label>
              <input
                ref = { (el) => this._receipt = el  }
                className="awepay_input"
                placeholder="Account Number"
                type="text"
                name="bankAcc"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="fullName"  className="awepay_label">Account Holder </label>
              <input
                ref = { (el) => this._receipt = el  }
                className="awepay_input"
                placeholder="Full Name"
                type="text"
                name="fullName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="receipt"  className="awepay_label">Receipt ID</label>
              <input
                ref = { (el) => this._receipt = el  }
                className="awepay_input"
                placeholder="receipt"
                type="text"
                name="receipt"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="amount" className="awepay_label">Amount </label>
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
               disabled={(this.state.formErrors.amount) || (!this.state.amount) || (!this.state.receipt) }
                className="epay-button"
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
               }} 
               >Submit Deposit </button>
            </div>
          </form>
          <div>
                {this.state.showHtml && <p>.</p> }
        </div>
        </div>   
    );
    } else {

      return (
        <div>
          <p style={{ marginTop: '150px' , textAlign: 'center' , fontSize:'42px', width:'100%' , color: 'var(--active-tab)' , fontWeight:'bold' , fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>  Only available for <span style={{color:'red'}}>USD</span></p>
        </div>

      );

    }
    
  }

  toggleExternalHTML() {
    this.setState({showHtml: !this.state.showHtml});
  }
}


export default DepositeForm;
