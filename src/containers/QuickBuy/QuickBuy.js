import React, { Component } from 'react';

class QuickBuy extends Component {
  handleCurrency = () => {
     //  Add Try and Catch
     // const applogic = window.env.api.applogicUrl;
      // const url = applogic.substring(0, applogic.length - 11) + 'v2/peatio/public/currencies' ;
      var proxyURL = 'https://cors-anywhere.herokuapp.com';
      const url ='https://www.speza.exchange/api/v2/peatio/public/currencies';
        fetch(  proxyURL + "/" + url , {
        method: 'GET',
        headers: {
          'Content-type':'application/json',
          'Access-Control-Allow-Origin':'*',
        }, 
      }
      ) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
        for ( var i = 0; i <  data.length ; i++ ) {
          console.log(data[i].name);
        }
      })
  };
  handleSubmit = e => {
    // const applogic = window.env.api.applogicUrl;
    // const url = applogic.substring(0, applogic.length - 11) + 'v2/peatio/public/currencies' ;
    var proxyURL = 'https://cors-anywhere.herokuapp.com';
    const url ='https://www.speza.exchange/api/v2/peatio/public/currencies';
    e.preventDefault();
      fetch(  proxyURL + "/" + url , {
      method: 'GET',
      headers: {
        'Content-type':'application/json',
        'Access-Control-Allow-Origin':'*',
      }, 
    }
    ) 
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.data);
    })
  };

  render() {
    return (
      <div>
          {this.handleCurrency()}
      </div>
    );
  }
}

export default QuickBuy;