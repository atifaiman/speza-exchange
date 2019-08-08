import React, { Component } from "react";
import Select from 'react-select';
import ReactDOM from 'react-dom'
import { render } from "react-dom";
import { Decimal } from '@openware/components';
import AwepayLogo from './awepay.png';
import money from './money.png';
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

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const VND = [
    { value: "TCB" , label: "Techcombank"},
    { value: "SCM" , label: "Sacombank"},
    { value: "VCB" , label: "Vietcombank"},
    { value: "ACB" , label: "Asia Commercial Bank"},
    { value: "DAB" , label: "DongA Bank"},
    { value: "VTB" , label: "Vietinbank"},
    { value: "BIDV" , label: "BIDV Bank"},
    { value: "EXIM" , label: "Eximbank"},
];

const THB = [
    { value: "KTB" , label: "Krung Thai Bank"},
    { value: "SCB" , label: "Siam Commercial Bank"},
    { value: "BBL" , label: "Bangkok Bank"},
    { value: "KBANK" , label: "Kasikorn Bank"},
    { value: "TMB" , label: "Thai Military Bank"},
    { value: "BAY" , label: "Krungsri Bank"},
];
const IDR = [
    { value: "BRI" , label: "Bank Rakyat Indonesia"},
    { value: "BNI" , label: "Bank Negara Indonesia"},
    { value: "BCA" , label: "Bank Central Asia"},
    { value: "MDR" , label: "Bank Mandiri"},
];
const MYR = [
    { value: "CIMB" , label: "CIMB Bank"},
    { value: "HLB" , label: "Hong Leong Bank"},
    { value: "MBB" , label: "Maybank Bank"},
    { value: "PBB" , label: "Public Bank"},
    { value: "RHB" , label: "RHB"},
];
const KRW = [
    { value: "088" , label: "Shinhan"},
    { value: "003" , label: "Ibk"},
    { value: "004" , label: "Kukmin(KB)"},
    { value: "011" , label: "Nonghyup(NH)"},
    { value: "020" , label: "Woori"},
    { value: "023" , label: "Sc"},
    { value: "045" , label: "Saemaul"},
];
const currencyOptions = [
    { value: "VND" , label: "VND"},
    { value: "THB" , label: "THB"},
    { value: "IDR" , label: "IDR"},
    { value: "MYR" , label: "MYR"},
    { value: "KRW" , label: "KRW"},
];
const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 'none',
      boxShadow: `0 0 0 0 'white'`,
      '&:foucus': { border: 'none'},
    }),
  };
class AwepayWidhrawForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        close: false,
        selectedOption2: 'a',
        userid: this.props.userid,
        amount: null,
        email: this.props.email,
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
        // email: "",
      }
    };
  }
  handleRefresh = e => { 
    window.location.reload();
  };

  handleSelectItemChange2 = selectedOption2 => {
        this.setState({ selectedOption2 });
    };
  handleSubmit = e => {
    const applogic = window.env.api.applogicUrl;
    const url = applogic.substring(0, applogic.length - 11 ) + 'v1/applogic/awepay/withdraw';
    e.preventDefault();
    if (formValid(this.state)) {
    fetch(url , {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Access-Control': 'Allow-Origin'
      },
      body:JSON.stringify({amount:this.state.amount,currency:this.state.currency, user_email:this.state.email,bank_acc_holder:this.state.fullName,bank_acc_no:this.state.bankAcc,bank:this.state.selectedOption2.value})//
    }
    ) 
    .then(res => res.json())
    .then(data => {
    const element = (
        <div style={{width:'600px' , height:'600px' , textAlign: 'left'}}>
               <h1 className="awepay_depsit_head">Withdraw</h1>
          <img  style={{  width: '150px' ,display:'flex' ,  padding:'30px' , margin: 'auto'}} src={AwepayLogo} alt="Awepay-Logo"/>
            <h3
             style={{ textAlign: 'center' ,
             color: '#242253',
             fontWeight: '300',
             fontSize: '24px',
             lineHeight:'12px',
             padding:'5px'
             }}>Request submitted</h3>

                      
          <table style={{width: '100%' , marginLeft: '25px' , padding: '0px 45px'}}>
              <tr>
                <td><p
            style={{ textAlign: 'left' ,
            color: 'var(--base)',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>Email</p></td>
             <td><p
            style={{ textAlign: 'center' ,
            color: '#242253',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>{this.state.email}</p></td>
              </tr>
              <tr>
                <td><p
            style={{ textAlign: 'left' ,
            color: 'var(--base)',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>Transactin ID</p></td>
             <td><p
            style={{ textAlign: 'center' ,
            color: '#242253',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>{data.tid}</p></td>
              </tr>
              <tr>
                <td><p
            style={{ textAlign: 'left' ,
            color: 'var(--base)',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>Currency</p></td>
             <td><p
            style={{ textAlign: 'center' ,
            color: '#242253',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>{data.currency.toUpperCase()}</p></td>
              </tr>
              <tr>
                <td><p
            style={{ textAlign: 'left' ,
            color: 'var(--base)',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>Amount</p></td>
             <td><p
            style={{ textAlign: 'center' ,
            color: '#242253',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>{data.amount}</p></td>
              </tr>
              <tr>
                <td><p
            style={{ textAlign: 'left' ,
            color: 'var(--base)',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>Withdraw charge</p></td>
             <td><p
            style={{ textAlign: 'center' ,
            color: '#242253',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>{data.fee}</p></td>
              </tr>
              <tr>
                <td><p
            style={{ textAlign: 'left' ,
            color: 'var(--base)',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>State</p></td>
             <td><p
            style={{ textAlign: 'center' ,
            color: '#242253',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight:'12px',
            padding:'5px'
            }}>{data.state}</p></td>
              </tr>
            </table>
            <button className="confirmation_button" onClick={this.handleRefresh}>continue</button>
        </div>
        );
        ReactDOM.render(element, document.getElementById('AwepayForm'));
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
        value < ((this.state.currency === "vnd") ? 30750 :  (this.state.currency === "thb") ? 512.5 : (this.state.currency === "idr") ? 205000 : (this.state.currency === "myr") ? 51.25 : (this.state.currency === "krw") ? 10300 : null ) ? "minimum withdraw not reached" : value > (this.state.balance - 50) ? "Minimum balance required is : 50$ " : "";
        break;
      // case "email":
      //   formErrors.email = emailRegex.test(value)
      //     ? ""
      //     : "invalid email address";
      //   break;
      default:
        break;
    }

     this.setState({ formErrors, [name]: value });
      
  };




  render() {
    const { formErrors , selectedOption , selectedOption2 } = this.state;

    if ((this.state.currency === "vnd")||(this.state.currency === "thb")||(this.state.currency === "idr")|| (this.state.currency === "myr") ||(this.state.currency === "krw")) {
    // if (true) {

      
    return (
      
        <div style={{ backgroundColor: '#ffffff',  borderRadius: '10px' , width: '400px' , display: 'flex' , flexDirection: 'column'  }}>
             <h1 className="awepay_depsit_head">Withdraw</h1>
          <img  style={{  width: '120px' ,display:'flex' ,  padding:'30px' , margin: 'auto'}} src={AwepayLogo} alt="Awepay-Logo"/>
         
          <form onSubmit={this.handleSubmit} noValidate>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="fullName"
              className="awepay_label"
              >Acount holder</label>
              <input
                className="awepay_input"
                placeholder="Full name"
                type="text"
                name="fullName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  , display: 'none'}}>
              <label htmlFor="email"  className="awepay_label">Email</label>
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
              {true && ( //formErrors.email.length > 0 
                 <div className="awepay_error">{formErrors.email}</div>
              )}
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="bankAcc"
              className="awepay_label">Bank Acount</label>
              <input
                className="awepay_input"
                placeholder="account"
                type="text"
                name="bankAcc"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
                <label   className="awepay_label"
              >Bank Name </label>
               
              <div
              style={{color: 'var(--text)',
               fontSize: 'calc(var(--gap) * 2.53)',
               border: '1px solid var(--input-block-border-color)',
               borderRadius: 'calc(var(--gap) * 0.66)',
               padding: '4px 15px',
               width: '100%',
               height:'50px',
               boxSizing:'border-box',
               }}>
                                   
              <Select
                  value={selectedOption2}
                  onChange={this.handleSelectItemChange2}
                  options={(this.state.currency === "vnd") ? VND :(this.state.currency === "thb") ? THB : (this.state.currency === "idr") ? IDR : (this.state.currency === "myr") ? MYR : (this.state.currency === "krw") ? KRW : null}
                  styles={customStyles}
              />
              </div>
              
            </div>
           
            {/* <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label 
               style={{
                background: 'var(--base-bright)',
                color: 'var(--text-muted)',
                fontSize: 'calc(var(--gap) * 2)',
                 top: 'calc(var(--gap) * (-0.53))',
                position: 'relative',
                padding: '2px 6px',
                borderRadius: '2px',
              }}
              htmlFor="bankName">Email</label>
              <input
              style={{color: 'var(--text)',
              fontSize: 'calc(var(--gap) * 2.53)',
              border: '1px solid var(--input-block-border-color)',
              borderRadius: 'calc(var(--gap) * 0.66)',
              padding: '0 15px',
              width: '100%',
              height:'50px',
              boxSizing:'border-box',
              }}
                placeholder="email"
                type="text"
                name="bankName"
                noValidate
                onChange={this.handleChange}
              />    
            </div> */}
{/* 
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="branch">Branch Name</label>
              <input
                placeholder="Branch"
                type="text"
                name="branch"
                noValidate
                onChange={this.handleChange}
              />
            </div>
         
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="bankAddress">Bank Address</label>
              <input
                placeholder="Band Address"
                type="text"
                name="bankAddress"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="country">Country</label>
              <input
                placeholder="Country"
                type="text"
                name="country"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label htmlFor="city">City</label>
              <input
                placeholder="City"
                type="text"
                name="city"
                noValidate
                onChange={this.handleChange}
              />
            </div>
             */}
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label
              className="awepay_label"
               htmlFor="amount">Amount </label>
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
            <div style={{ display: 'flex' ,flexDirection: 'column' , marginBottom: '15px' , width: '100%'  }}>
              <label 
              className="awepay_label"
              style={{fontSize: '15px', color:'#7045af'}}
              > <span  style={{fontWeight: 'bold'}} >Fee({(this.state.currency === "krw") ? '3%' : '2.5%' }) : </span><span><Decimal fixed={2}>{ this.state.amount * ((this.state.currency === "krw") ? 0.03 : 0.025)}</Decimal></span></label>
              <p style={{fontSize: '12px', color:'#7045af'}} >*Dear valued customer this fee is charged solely by the service provider.</p>
              </div>
            <div style={{ width: '100%' , display: 'flex' , flexDirection: 'column' , alignItems: 'center'}}>
              <button type="submit"    className="epay-button"
               disabled={(this.state.formErrors.amount) || (!this.state.selectedOption2.value) || (!this.state.fullName)|| (!this.state.bankAcc) || (!this.state.amount) }//|| (this.state.formErrors.email)  || (!this.state.email)
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
              }} > Send Request </button>
            </div>
          </form>
        </div>   
    );
    } else {

      return (
        <div style={{  
          borderRadius: '10px',
          width: '500px',
          height:'400px',
          display: 'flex',
          padding:'50px',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: 'calc(var(--font-size) * 1.335)',
          fontFamily: 'var(--font-family)',
         }}>
           <img  style={{  width: '220px' ,display:'flex' , margin: '50px auto'}} src={money} alt="Logo"/>
          <p style={{ textAlign: 'center' , width:'100%' , color: '#242253' , fontWeight:'300' , fontSize:'20px' , lineHeight:'0px' }}> Supported currencies are</p>
          <p style={{ textAlign: 'center' , width:'100%' , color: '#242253' , fontWeight:'bold' , fontSize:'24px' , lineHeight:'0px' }}> VND, IDR , KRW , THB  and MYR. </p>
        </div>
      );

    }
    
  }
}


export default AwepayWidhrawForm;

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