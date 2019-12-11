import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { Decimal } from '@openware/components';
import { render } from "react-dom";
import Modal from "react-responsive-modal";
import AwepayLogo from './awepay.png';
import money from './money.png';
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

class AwepayDeposite extends Component {
  constructor(props) {
    super(props);
    this.state = {
        close: false,
        email: this.props.email,
        amount: null,
        userid: this.props.userid,
        showHtml: false,
        currency: this.props.currency,
        html: "j",
      formErrors: {
        // email: "",
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
    const url = applogic.substring(0, applogic.length - 11) + 'v1/applogic/awepay/deposit' ;
    e.preventDefault();
    if (formValid(this.state)) {
      fetch( url , {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Access-Control': 'Allow-Origin'
      },
      body:JSON.stringify({user_sn:this.state.userid,amount:this.state.amount,currency:this.state.currency,user_email:this.state.email})
    }
    ) 
    .then(res => res.json())
    .then(data => {
      const element = (
        <div style={{width:'500px' , height:'500px' , textAlign: 'left'}}>
           <h1  style={{ color:'#000'}}className="awepay_depsit_head">Online banking</h1>
          <h3
          style={{ textAlign: 'center' ,
          color: '#242253',
          fontWeight: '300',
          fontSize: '20px',
          lineHeight:'25px',
          padding:'5px'
          }}>Confirm your Deposit information</h3>
          <p
           style={{ textAlign: 'center' ,
           color: '#242253',
           fontWeight: 'bold',
           fontSize: '30px',
           lineHeight:'25px',
           padding:'5px',
           }}>{this.state.email}</p>
          <p
           style={{ textAlign: 'center' ,
           color: '#242253',
           fontWeight: 'bold',
           fontSize: '30px',
           lineHeight:'25px',
           padding:'5px',
           textTransform: 'uppercase',
           }}>{this.state.currency}</p>
          <p
           style={{ textAlign: 'center' ,
           color: '#242253',
           fontWeight: 'bold',
           fontSize: '30px',
           lineHeight:'25px',
           padding:'5px'
           }}>  <Decimal fixed={2}>{this.state.amount}</Decimal> </p>
        <div dangerouslySetInnerHTML={{__html: data.data}}/>
        <p
         style={{ textAlign: 'center' ,
         width: '60%',
         margin:'auto',
         color: '#242253',
         fontWeight: '300',
         fontSize: '18px',
         lineHeight:'25px',
         padding:'5px'
         }}>You will be redirected to your Online Banking for Authorization</p>
        </div>
      );
      console.log(data);
      console.log(data.data);
      ReactDOM.render(element, document.getElementById('AwepayForm'));
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
      // case "email":
      //   formErrors.email = emailRegex.test(value)
      //     ? ""
      //     : "invalid email address";
      //   break;
      case "amount":
        formErrors.amount =
        value < ((this.state.currency === "vnd") ? 103500 :  (this.state.currency === "thb") ? 517.5 : (this.state.currency === "idr") ? 207000 : (this.state.currency === "myr") ? 51.75 : (this.state.currency === "krw") ? 10400 : (this.state.currency === "cny") ? 2 : null ) ? "Minimum amount not reached" : value >  ((this.state.currency === "vnd") ? 300000000 :  (this.state.currency === "thb") ? 500000 : (this.state.currency === "idr") ? 200000000 : (this.state.currency === "myr") ? 50000 : (this.state.currency === "krw") ? 30000000 : (this.state.currency === "cny") ? 50000 : null )? "Maximum amount exceeded " : "";
        break;
      default:
        break;
    }

     this.setState({ formErrors, [name]: value });
      
  };

  render() {

    if (this.state.currency ===  "vnd" || this.state.currency === "idr" || this.state.currency === "krw" || this.state.currency ==="thb" || this.state.currency ==="myr" || this.state.currency ==="cny" ) {
      // if (true) {

      const { formErrors } = this.state;

    return (
      
      <div style={{ backgroundColor: '#ffffff',  borderRadius: '10px' , width: '500px' , display: 'flex' , flexDirection: 'column' }}>
        
          <h1 className=" ">Deposit</h1>
          <p  style={{ color: '#000' , fontsize: '20px', margin: 'auto' , fontWeight: '400' , fontSize:'20px'}} alt="Awepay-Logo">Online banking</p>
          <form onSubmit={this.handleSubmit} noValidate>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <div style={{ display: 'none'}}>
              <label htmlFor="email"
              className="awepay_label"
              >Email</label>
              <input
                className="awepay_input"
                ref = { (el) => this._email = el  }
                // className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              </div>
              { true && ( //formErrors.email.length > 0
                <div className="awepay_error">{formErrors.email}</div>
              )}
            </div>

            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="amount"
              className="awepay_label"
              >Amount </label>
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
                <div  className="awepay_error">{formErrors.amount}</div>
              )}
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label 
              className="awepay_label"
              style={{fontSize: '15px', color:'#7045af'}}
              > <span  style={{fontWeight: 'bold'}} >Fee ({(this.state.currency === "krw") ? '4%' : (this.state.currency === "cny") ? '4.5%' : '3.5%' }) : </span><span><Decimal fixed={2}>{ this.state.amount * ((this.state.currency === "krw") ? 0.04 : (this.state.currency === "cny") ? 0.045 : 0.035)}</Decimal></span></label>
              <p style={{fontSize: '12px', color:'#7045af'}} >*Dear valued customer this fee is charged solely by the service provider. our company does not charge you for performing this transaction</p>
              </div>
            <div style={{ width: '100%' , display: 'flex' , flexDirection: 'column' , alignItems: 'center'}}>
              <button type="submit" 
               className="epay-button"
               disabled={(this.state.formErrors.amount) || (!this.state.amount) }//|| (this.state.formErrors.email) || (!this.state.email) 
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
              }} >Next</button>
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
          <p style={{ textAlign: 'center' , width:'100%' , color: '#242253' , fontWeight:'300' , fontSize:'20px' , lineHeight:'0px' }}> Supported currencies are</p>
          <p style={{ textAlign: 'center' , width:'100%' , color: '#242253' , fontWeight:'bold' , fontSize:'24px' , lineHeight:'0px' }}> VND, IDR, KRW, THB , MYR and CNY.</p>
        </div>

      );

    }
    
  }

  toggleExternalHTML() {
    this.setState({showHtml: !this.state.showHtml});
  }
}

render(<AwepayDeposite />, document.getElementById("awepay"));

export default AwepayDeposite;