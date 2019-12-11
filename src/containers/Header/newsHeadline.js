import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { render } from "react-dom";
import logo from './speaker.png';

// const ListItem = ({ value }) => (
//   <li className="slideN slide1">{value}</li>
// );
// const List = ({ items }) => (
//     <ul className="slidesN">
//       {
//         items.map((item, i) => <ListItem key={i} value={item}  />)
//       }
//     </ul>
//   );

// const ListItem = ({ value, onClick }) => (
//   <li className="slideN" onClick={onClick}>{value}</li>
// );

// const List = ({ items, onItemClick }) => (
//   <ul>
//     {
//       items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
//     }
//   </ul>
// );

class newsHeadline extends Component {
  
    state = {
      notices: "",
      fruites: ['asdas','asdasd','asdasd']
    };
    constructor() {
      super();
      this.state = {
        headingsArray:[],
      }
      // try{
      //   const url = window.env.api.tradeUrl + '/public/notices' ;
      //   fetch( url , {
      //   method: 'Get',
      //   headers: {
      //     'Content-type':'application/json',
      //     'Access-Control': 'Allow-Origin'
      //   },
      //   })  .then(res => res.json())
      //       .then(data => {
      //         for( var i=0 ; i<data.length ; i++){
      //           // this.setState({
      //           //   headingsArray[] = data[i].notice_title;
      //           // });
      //           // this.setState({
      //           //   headingsArray : this.state.headingsArray.push(data[i].notice_title),
      //           // });
      //           // this.setState({
      //           //   headingsArray: [...this.state.headingsArray, data[i].notice_title],
      //           //   //headingsArray:  data,
      //           // });
      //           // this.state.headingsArray.push(data[i].notice_title);
      //           // this.state.headingsArray.push("sss");
      //           // console.log(data[i].notice_title);
      //         }
      //       //console.log(this.state.headingsArray);
      //       // this.setState({
      //       //       headingsArray : data.notice_title
      //       // });
      //       // const element = (
      //       //   // <ul className="slidesN">
      //       //   // <List items={fruites} />
      //       //   // <img onClick={handleClick} src={logo} style={{ position:'absolute', width: '20px' , height: '20px' , margin:'10px' , right:'10px', cursor: 'pointer'}} alt="Logo" />
      //       //   // </ul>
      //       // );
            
      //       // ReactDOM.render( <List items={this.state.fruites}/> , document.getElementById('sliderN'));
      //  })
      //   }  catch(err) {
      //   location.reload(true);
      // }
    }
    // componentDidMount() {
    //   console.log(this.state.headingsArray);
    // }
    //console.log(this.state.headingsArray);
    // <img onClick={handleClick} src={logo} style={{ position:'absolute', width: '20px' , height: '20px' , margin:'10px' , right:'10px', cursor: 'pointer'}} alt="Logo" />
  
    render() {

    function handleClick(e) {
        document.getElementById("sliderN").style.display = 'none';      
        document.getElementsByClassName("pg-header--active")[0].style.margin = '0';   
        localStorage.setItem('notificationClose', true);
    }

    return (
      <div id="sliderN" className={(localStorage.getItem('notificationClose')) ? 'noDisplay' : '' }>
          <ul className="slidesN" id="news"> 
          </ul>
          {/* <img src={logo} style={{height:'32px'}}/> */}
      </div>
    );
    } 
  }

export default newsHeadline;
